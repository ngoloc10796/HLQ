
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            /* let data = {
                code: "province",
                typeApi: ["*"],
                id: "1",
                url: "/api/category",
                customApi: [{ name: "getListProvince", typeApi: "list", url: "/api/category", }]
            }; */
            let data = {
                code: "province",
                typeApi: ["*"],
                id: "1",
                url: "/api/category",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


