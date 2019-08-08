
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "commune",
                typeApi: ["*"],
                id: "3",
                url: "/api/category",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


