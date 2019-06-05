(function () {
  "use strict";
  angular
    .module("MyApp")
    .controller("register.Controller", function ($rootScope, $scope, $timeout, $q, $state, $stateParams, $compile, AuthService, ApiService, APP_CONFIG) {

      var a_language = APP_CONFIG.languageConfig.language;
      var a_userInfo = APP_CONFIG.userInfo;

      $scope.module = "register";
      $scope.route = "admin." + $scope.module;
      $scope.modelForm = "dataForm";
      $scope.modelSearch = "dataSearch";
      $scope.viewMode = "";

      $scope.currentScope = $scope;

      $scope.attrForm = [
        [{
          name: "name",
          col: "4",
          required: true,
          ngDisabled: "viewMode == 'detail'",
          type: "text",
        },
        {
          name: "phone",
          col: "4",
          required: true,
          ngDisabled: "viewMode == 'detail'",
          type: "text",
        },
        {
          name: "birthday",
          col: "4",
          required: true,
          ngDisabled: "viewMode == 'detail'",
          type: "date",
        },
        ],
        [
          {
            name: "provinceId",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "select",
            mOption: "listProvince",
            mKeytotext: "name",
          },
          {
            name: "districtId",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "select",
            mOption: "listDistrict",
            mKeytotext: "name",

          },
          {
            name: "communeId",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "select",
            mOption: "listCommune",
            mKeytotext: "name",

          }
        ],
        [
          {
            name: "peopleId",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "text",

          },
          {
            name: "permanentResidence",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "text",

          },
          {
            name: "schools",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "text",

          }
        ],
        [
          {
            name: "youGraduated",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "text",

          },
          {
            name: "graduationYear",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "date",
            valid: "m-type='year'"

          },
          {
            name: "score",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "number-float",

          }
        ],
        [
          {
            name: "wantToApply",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "text",

          },
          {
            title: a_language.register_aspirations1,
            name: "aspirations1Id",
            col: "4",
            required: true,
            ngDisabled: "viewMode == 'detail'",
            type: "select",
            mOption: "listAspirations",
            mKeytotext: "name",

          },
          {
            title: a_language.register_aspirations2,
            name: "aspirations2Id",
            col: "4",
            required: true,
            ngDisabled: "viewMode == 'detail'",
            type: "select",
            mOption: "listAspirations",
            mKeytotext: "name",
          }
        ],

        [
          {
            name: "mailingAddress",
            col: "12",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "text",

          },
          {
            name: "phoneAnswered",
            col: "4",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "text",

          },
          {
            name: "linkFacebook",
            col: "8",
            required: false,
            ngDisabled: "viewMode == 'detail'",
            type: "text",

          }
        ],

      ];

      $scope.attrSearch = null;


      $scope.$on("$viewContentLoaded", function () {
        if ($state.current.name == $scope.route + ".list") {
          $scope.initTable();
        }
        else {
          $scope.getListProvince();
          $scope.getListDistrict();
          $scope.getListCommune();
          $scope.getListAspirations();
          if ($state.current.name == $scope.route + ".create") {
            $scope.viewMode = "create";
          } else {
            if ($state.current.name == $scope.route + ".update") {
              $scope.viewMode = "update";
            }
            if ($state.current.name == $scope.route + ".detail") {
              $scope.viewMode = "detail";
            }
            ApiService[$scope.module].findById($stateParams.id).then(function (res) {
              $scope.$apply(function () {
                $scope[$scope.modelForm] = res.data;
              });
            })
          }
        }
      });

      $scope.getListProvince = function () {
        ApiService['province'].list({ size: 1000 }).then(function (res) {
          $scope.$apply(function () {
            $scope.listProvince = res.data.content;
          });
        })
      };

      $scope.getListDistrict = function () {
        ApiService['district'].list({ size: 1000 }).then(function (res) {
          $scope.$apply(function () {
            $scope.listDistrict = res.data.content;
          });
        })
      };

      $scope.getListCommune = function () {
        ApiService['commune'].list({ size: 1000 }).then(function (res) {
          $scope.$apply(function () {
            $scope.listCommune = res.data.content;
          });
        })
      };

      $scope.getListAspirations = function () {
        ApiService['aspiration'].list({ size: 1000 }).then(function (res) {
          $scope.$apply(function () {
            $scope.listAspirations = res.data.content;
          });
        })
      };

      $scope.search = function () {
        // hàm được viết trong myTable
        $rootScope.searchDataTable();
      };

      $scope.clearSearch = function () {
        $scope[$scope.modelSearch] = {};
      }

      $scope.gotolist = function () {
        $state.go($scope.route + ".list");
      };

      $scope.create = function () {
        ApiService[$scope.module].create($scope[$scope.modelForm]);
      };

      $scope.update = function () {
        ApiService[$scope.module].update($scope[$scope.modelForm]);
      };

      $scope.delete = function () {
        swal.show('confirm', a_language.c_deleteConfirm, '', function (confirm) {
          if (confirm) {
            ApiService[$scope.module].delete($stateParams.id);
          }
        });
      };

      // $scope.getList = function (callback, objFilter) {
      //   ApiService[$scope.module].list(objFilter).then(function (res) {
      //     callback(res,res.data.totalElements);
      //   });
      // };

      $scope.initTable = function () {
        $scope.config = {
          module: $scope.module,
          route: $scope.route,
          allowSelect: false,
          ordering: false,
          paging: true,
          lengthMenu: [10, 25, 50, 100, 500, 700, 1000],
          filter: false,
          info: true,
          allowDrag: false,
          orderDefault: ["name", "asc"],
          allowUpdate: $state.current.update,
          allowButtons: ['create'],
          allowActions: ['view', 'update', 'delete'],
          excelColumn: [1, 2, 3, 4, 6, 7],
          customButtons: [],
          customList: null,
          customOperatorSearch: null,
          columns: [
            {
              type: "stt"
            },
            // {
            //   title: a_language.province_numericalOrder,
            //   data: "numericalOrder",
            //   width: "50px",
            //   className:"text-center"
            // },
            {
              title: a_language[$scope.module + '_' + 'name'],
              data: "name",
              width: "auto",
            },
            {
              title: a_language[$scope.module + '_' + 'phone'],
              data: "phone",
              width: "150px",
            },
            {
              title: a_language[$scope.module + '_' + 'birthday'],
              data: "birthday",
              width: "150px",
              type: "date"
            },
            // {
            //   title: a_language.province_description,
            //   data: "description",
            //   width: "auto",
            // },

          ]
        };
      };

    });
})();
