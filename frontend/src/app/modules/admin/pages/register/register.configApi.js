
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "register",
                typeApi: ["*"],
                id: null,
                url: "/api/register",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


