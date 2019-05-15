(function () {
  'use strict';
  angular
    .module('MyApp')
    .config(function routerConfig($stateProvider, APP_CONFIG) {
      var res = "admin";
      var state = res;
      var ctrl = res + ".Controller";
      var temp = "/app/modules/" + res + "/" + res;
      var a_language = APP_CONFIG.languageConfig.language;

      $stateProvider
        .state(state, {
          url: "/admin",
          templateUrl: temp + ".html",
          controller: ctrl,
          pageTitle: a_language.c_homeAdmin
        })
    });
})();
