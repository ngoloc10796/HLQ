(function () {
  "use strict";
  angular
    .module("MyApp")
    .controller("client.Controller", function ($rootScope, $scope, $timeout, $q, $state, $stateParams, $compile, AuthService, ApiService, APP_CONFIG) {

      var a_language = APP_CONFIG.languageConfig.language;
      var a_userInfo = APP_CONFIG.userInfo;

      $scope.module = "register";
      $scope.route = $scope.module;
      $scope.modelForm = "dataForm";
      $scope.modelSearch = "dataSearch";
      $scope.currentScope = $scope;

      $scope.$on("$viewContentLoaded", function () {
        $scope.getListProvince();
        $scope.getListDistrict();
        $scope.getListCommune();
        $scope.getListAspirations();
      });

      $scope.attrForm = [
        [{
          name: "name",
          col: "4",
          required: true,
          ngDisabled: false,
          type: "text",
        },
        {
          name: "phone",
          col: "4",
          required: true,
          ngDisabled: false,
          type: "text",
        },
        {
          name: "birthday",
          col: "4",
          required: true,
          ngDisabled: false,
          type: "date",
        },
        ],
        [
          {
            name: "provinceId",
            col: "4",
            required: false,
            ngDisabled: false,
            type: "select",
            mOption: "listProvince",
            mKeytotext: "name",
          },
          {
            name: "districtId",
            col: "4",
            required: false,
            ngDisabled: false,
            type: "select",
            mOption: "listDistrict",
            mKeytotext: "name",

          },
          {
            name: "communeId",
            col: "4",
            required: false,
            ngDisabled: false,
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
            ngDisabled: false,
            type: "text",

          },
          {
            name: "permanentResidence",
            col: "4",
            required: false,
            ngDisabled: false,
            type: "text",

          },
          {
            name: "schools",
            col: "4",
            required: false,
            ngDisabled: false,
            type: "text",

          }
        ],
        [
          {
            name: "youGraduated",
            col: "4",
            required: false,
            ngDisabled: false,
            type: "text",

          },
          {
            name: "graduationYear",
            col: "4",
            required: false,
            ngDisabled: false,
            type: "date",
            valid: "m-type='year'"

          },
          {
            name: "score",
            col: "4",
            required: false,
            ngDisabled: false,
            type: "number-float",

          }
        ],
        [
          {
            name: "wantToApply",
            col: "4",
            required: false,
            ngDisabled: false,
            type: "text",

          },
          {
            title: a_language.register_aspirations1,
            name: "aspirations1Id",
            col: "4",
            required: true,
            ngDisabled: false,
            type: "select",
            mOption: "listAspirations",
            mKeytotext: "name",
          },
          {
            title: a_language.register_aspirations2,
            name: "aspirations2Id",
            col: "4",
            required: true,
            ngDisabled: false,
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
            ngDisabled: false,
            type: "text",

          },
          {
            name: "phoneAnswered",
            col: "4",
            required: false,
            ngDisabled: false,
            type: "text",

          },
          {
            name: "linkFacebook",
            col: "8",
            required: false,
            ngDisabled: false,
            type: "text",

          }
        ],

      ];

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

      $scope.create = function(){
        ApiService['register'].create($scope[$scope.modelForm]);
      };

    });
})();
