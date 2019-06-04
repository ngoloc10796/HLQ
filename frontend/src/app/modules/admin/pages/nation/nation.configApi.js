
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "nation",
                typeApi: ["*"],
                id: "4",
                url: "/api/category",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


