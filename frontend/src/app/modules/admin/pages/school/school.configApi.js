
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "school",
                typeApi: ["*"],
                id: null,
                url: "/api/school",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


