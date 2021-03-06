(function () {
  "use strict";
  angular
    .module("MyApp")
    .controller("event.Controller", function ($rootScope, $scope, $timeout, $q, $state, $stateParams, $compile, AuthService, ApiService, APP_CONFIG) {

      var a_language = APP_CONFIG.languageConfig.language;
      var a_userInfo = APP_CONFIG.userInfo;

      $scope.module = "event";
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
          name: "orders",
          col: "4",
          required: true,
          ngDisabled: "viewMode == 'detail'",
          type: "number-integer",
        },{
          name: "active",
          col: "4",
          required: false,
          ngDisabled: "viewMode == 'detail'",
          type: "checkbox",
        }],
        [{
          name: "startAt",
          col: "4",
          required: true,
          ngDisabled: "viewMode == 'detail'",
          type: "datetime",
        },
        {
          name: "finishAt",
          col: "4",
          required: true,
          ngDisabled: "viewMode == 'detail'",
          type: "datetime",
        }],[
        {
          name: "description",
          col: "12",
          required: false,
          ngDisabled: "viewMode == 'detail'",
          type: "textarea",
        }]
      ];

      $scope.attrSearch = null;


      $scope.$on("$viewContentLoaded", function () {
        if ($state.current.name == $scope.route + ".list") {
          $scope.initTable();
        } else {
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
          allowButtons: ["create"],
          allowActions: ["view", "update", "delete"],
          excelColumn: [1, 2, 3, 4, 6, 7],
          customButtons: [],
          customList: null,
          customOperatorSearch: null,
          columns: [
            {
              title: a_language[$scope.module + '_' + 'orders'],
              data: "orders",
              width: "50px",
              className:"text-center"
            },
          {
            title: a_language[$scope.module + '_' + 'name'],
            data: "name",
            width: "auto",
          },
          {
            title: a_language[$scope.module + '_' + 'active'],
            data: "active",
            width: "200px",
          }
          ]
        };
      };

    });
})();
