
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "prioritize",
                typeApi: ["*"],
                id: "6",
                url: "/api/category",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


