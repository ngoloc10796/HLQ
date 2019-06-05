(function () {
  "use strict";
  angular
    .module("MyApp")
    .controller("feedback.Controller", function ($rootScope, $scope, $timeout, $q, $state, $stateParams, $compile, AuthService, ApiService, APP_CONFIG) {

      var a_language = APP_CONFIG.languageConfig.language;
      var a_userInfo = APP_CONFIG.userInfo;

      $scope.module = "feedback";
      $scope.route = "admin." + $scope.module;
      $scope.modelForm = "dataForm";
      $scope.modelSearch = "dataSearch";

      $scope.currentScope = $scope;

      /* array[array[object]] default: false */
      /* {
        title: string, key of object language
        name: (required) string (*_form *_to),  ex: "email"
        col: (required) string is number, ex: "4"
        required: true | false,
        model: string | null, ex: "viewMode == 'detail'",
        id: string | null,
        class: string | null,
        ngDisabled: string | false, ex: `${$scope.modelForm}.*`,
        ngIf: string | false,
        ngShow: string | false,
        ngHide: string | false, ex: ngHide:`${$scope.modelForm}.name == 'quyet'`
        valid: string | false, ex: valid:`check-maxLength="10"`
        event: string | false,   ex: event: `ng-change="functionAlert()"`
        type: (required) text | number-integer | number-float | textarea | select | summernote | ckeditor | date | datetime | checkbox,
      } */
      /* {
        option more:
        type == select [
          mOption: (required) string, [tên mảng],
          mKeytotext: string | false,
          mKeytoid: string | false,
          mClear: true | false,
          mSearch: true | false,
          mMultiple: true | false,
        ],
        type == radio [
          inline: true | false , trên 1 dòng
          option: (required) [object], ex: [{value:"nam",title:"Nam"},{value:"nu",title:"Nữ"}]
        ],
        type == checkbox-list [
          inline: true | false , trên 1 dòng
          option: (required) [object], ex: [{value:"nam",title:"Nam"},{value:"nu",title:"Nữ"}]
        ],

      */
      $scope.attrForm = [
        [{
          name: "name",
          col: "4",
          required: true,
          ngDisabled: "viewMode == 'detail'",
          type: "text",
        },
        {
          name: "email",
          col: "4",
          required: true,
          ngDisabled: "viewMode == 'detail'",
          type: "text",
          valid: "check-mail"
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
          valid: ""
        }],
        [{
          name: "message",
          col: "12",
          required: true,
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

      $scope.viewMode = "";

      $scope.listStatus = [
        {
          ma: "new",
          name: a_language[$scope.module + '_' + 'new'],
        },
        {
          ma: "processing",
          name: a_language[$scope.module + '_' + 'processing'],
        },
        {
          ma: "deleted",
          name: a_language[$scope.module + '_' + 'deleted'],
        },
        {
          ma: "closed",
          name: a_language[$scope.module + '_' + 'closed'],
        }
      ];

      $scope.$on("$viewContentLoaded", function () {
        if ($state.current.name == $scope.route + ".list") {
          $scope.initTable();
        } else {
          if ($state.current.name == $scope.route + ".create") {
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
        }
      });

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

      $scope.getList = function (callback, objFilter) {
        ApiService[$scope.module].list(objFilter).then(function (res) {
          callback(res, res.data.totalElements);
        });
      };

      /* $scope.config = {
          module: $scope.module,  (required) string, tên module apiService
          route: $scope.route,  (required) string, tên route
          hiddenParamUrl: true | false ,default: false
          allowSelect: true | false ,default: false
          ordering: true | false ,default: false
          paging: true | false ,default: false
          lengthMenu: [10, 25], [array number] ,default: false [10, 25, 50, 100, 500, 700, 1000]
          filter: true | false ,default: false
          info: true | false ,default: false
          allowDrag: string | false, tên trường
          orderDefault: ["name", "asc"],  (required if ordering: true) ["attr", "asc | desc"] | false
          allowUpdate: $state.current.update, true | false ,default: false
          allowButtons: ["delete", "create", "filter", "excel"], (required) ["delete", "create", "filter", "excel"] | []
          excelColumn: [1, 2, 3, 4, 6, 7], [array number] ,default: []
          allowActions: ["view", "update", "delete"], (required)  ["view", "update", "delete"] | []
          customButtons: array[object] | []
          customList: "getList", string | null, name of function getList
          customOperatorSearch: {     ["key": "operator"] | null
            "name": ":regex:",
            "email": ":regex:",
            "status": "=",
            "createdTime_from": ">=",
            "createdTime_to": "<="
          },
          columns: (required) array[object]
            - type: stt | render (if use render angular) |  date | datetime | datetimehour | drag
            - title: string
            - data: string
            - width: "150px", string px | auto | %
            - visible: true | false,
            - orderable: true | false,
            - render: function (data, type, full, meta){
              return;
            },
          columns: [{}]
        }; */

      $scope.initTable = function () {
        $scope.config = {
          module: $scope.module,
          route: $scope.route,
          allowSelect: true,
          ordering: true,
          paging: true,
          lengthMenu: [10, 25, 50, 100, 500, 700, 1000],
          filter: true,
          info: true,
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
            title: a_language[$scope.module + '_' + 'name'],
            data: "name",
            width: "150px",
            render: function (data) {
              return myApp.showTooltip(data, 30, false);
            },
            type: "render"
          },
          {
            title: a_language[$scope.module + '_' + 'email'],
            data: "email",
            width: "150px",
            render: function (data) {
              return myApp.showTooltip(data, 30, false);
            },
            type: "render"
          },
          {
            title: a_language[$scope.module + '_' + 'phone'],
            data: "phone",
            width: "150px",
          },
          {
            title: a_language[$scope.module + '_' + 'idRead'],
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
            title: a_language[$scope.module + '_' + 'status'],
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
            title: a_language[$scope.module + '_' + 'createdTime'],
            data: "createdTime",
            width: "100px",
            type: "datetime",
          }
          ]
        };
      };

    });
})();
