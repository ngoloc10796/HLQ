
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "aspiration",
                typeApi: ["*"],
                id: "7",
                url: "/api/category",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


