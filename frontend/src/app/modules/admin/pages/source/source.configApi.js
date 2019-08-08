
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "source",
                typeApi: ["*"],
                id: "5",
                url: "/api/category",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


