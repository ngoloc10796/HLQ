
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "collaborator",
                typeApi: ["*"],
                id: "8",
                url: "/api/category",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


