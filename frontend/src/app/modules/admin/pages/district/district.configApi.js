
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "district",
                typeApi: ["*"],
                id: "2",
                url: "/api/category",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


