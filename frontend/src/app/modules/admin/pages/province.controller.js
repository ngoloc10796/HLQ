(function () {
  "use strict";
  angular
    .module("MyApp")
    .controller("province.Controller", function ($rootScope, $scope, $timeout, $q, $state, $stateParams, $compile, AuthService, ApiService, APP_CONFIG) {

      var a_language = APP_CONFIG.languageConfig.language;
      var a_userInfo = APP_CONFIG.userInfo;

      $scope.module = "province";
      $scope.route = "admin." + $scope.module;
      $scope.modelForm = "dataForm";
      $scope.modelSearch = "dataSearch";
      $scope.modelSearch = "dataSearch";
      $scope.viewMode = "";

      $scope.currentScope = $scope;

      $scope.attrForm = [
        [{
          name: "code",
          col: "4",
          required: true,
          ngDisabled: "viewMode == 'detail'",
          type: "text",
        },
        {
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
        }],
        [{
          name: "status",
          col: "4",
          required: true,
          ngDisabled: "viewMode == 'detail'",
          type: "select",
          mOption: "listStatus",
          mKeytotext: "name",
          mKeytoid: "ma",
          mClear: true,
        }],
        [{
          name: "description",
          col: "12",
          required: false,
          ngDisabled: "viewMode == 'detail'",
          type: "textarea",
        }]
      ];

      $scope.attrSearch = [
        [{
          name: "name",
          col: "4",
          type: "text",
        },
        {
          name: "email",
          col: "4",
          type: "text",          
        },
        {
          name: "status",
          col: "4",
          type: "select",
          mOption: "listStatus",
          mKeytotext: "name",
          mKeytoid: "ma",
          mClear: true,
        }],
        [{
          title: "c_fromDate",
          name: "createdTime_from",
          col: "3",
          type: "date",
          valid: "check-date check-tuNgay"
        },
        {
          title: "c_toDate",
          name: "createdTime_to",
          col: "3",
          type: "date",
          valid: "check-date check-denNgay"
        }]
      ];

      $scope.listStatus = [{
        ma: "new",
        name: a_language.feedback_new
      },
      {
        ma: "processing",
        name: a_language.feedback_processing
      },
      {
        ma: "deleted",
        name: a_language.feedback_deleted
      },
      {
        ma: "closed",
        name: a_language.feedback_closed
      }
      ];     


      $scope.$on("$viewContentLoaded", function () {
        if ($state.current.name == $scope.route + ".list") {
          $scope.initTable();
        } else if ($state.current.name == $scope.route + ".create") {
          $scope.viewMode = "create";
          $scope.dataForm = {
            message: "Tôi rất hài lòng về sản phầm này",
            status: "new"
          }
        } else {
          if ($state.current.name == $scope.route + ".update") {
            $scope.viewMode = "update";
          }
          if ($state.current.name == $scope.route + ".detail") {
            $scope.viewMode = "detail";
          }
          ApiService[$scope.module].findById($stateParams.id).then(function (res) {
            $scope.$apply(function () {
              $scope[$scope.modelForm] = res;
            });
          })
        }
      });

      $scope.search = function () {
        // hàm được viết trong myTable
        $rootScope.searchDataTable();
      };

      $scope.clearSearch = function(){
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

      $scope.getList = function (callback, objFilter) {
        ApiService[$scope.module].list(objFilter).then(function (res) {
          callback(res,res.info.meta.total);
        });
      };

      $scope.initTable = function () {
        $scope.config = {
          module: $scope.module,
          route: $scope.route,
          allowSelect: false,
          ordering: false,
          paging: false,
          lengthMenu: [10, 25, 50, 100, 500, 700, 1000],
          filter: false,
          info: false,
          allowDrag: false,
          orderDefault: ["name", "asc"],
          allowUpdate: $state.current.update,
          allowButtons: ["delete", "create", "filter", 'excel'],
          allowActions: ["view", "update", "delete"],
          excelColumn: [1, 2, 3, 4, 6, 7],
          customButtons: [],
          customList: "getList",
          customOperatorSearch: {
            "name": ":regex:",
            "email": ":regex:",
            "status": "=",
            "createdTime_from": ">=",
            "createdTime_to": "<="
          },
          columns: [{
            type: "stt"
          },
          {
            title: a_language.feedback_name,
            data: "name",
            width: "150px",
            render: function (data) {
              return myApp.showTooltip(data, 30, false);
            },
            type: "render"
          },
          {
            title: a_language.feedback_email,
            data: "email",
            width: "150px",
            render: function (data) {
              return myApp.showTooltip(data, 30, false);
            },
            type: "render"
          },
          {
            title: a_language.feedback_phone,
            data: "phone",
            width: "150px",
          },
          {
            title: a_language.feedback_idRead,
            data: "idRead",
            width: "100px",
            class: "text-center",
            render: function (data) {
              if (data) {
                return `<i class="fa fa-check"></i>`;
              }
            }
          },
          {
            title: a_language.feedback_status,
            data: "status",
            width: "100px",
            type: "render",
            render: function (data) {
              if (data != null) {
                var arr = $scope.listStatus.filter(item => {
                  return item.ma == data;
                })
                if (arr && arr.length > 0) {
                  return arr[0].name;
                } else {
                  return "";
                }
              } else {
                return data;
              }
            }
          },
          {
            title: a_language.feedback_createdTime,
            data: "createdTime",
            width: "100px",
            type: "datetime",
          }
          ]
        };
      };

    });
})();
