
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "specialize",
                typeApi: ["*"],
                id: null,
                url: "/api/specialize",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


