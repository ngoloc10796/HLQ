
(function () {
    'use strict';
    angular.module('MyApp')
        .run(function ($rootScope, APP_CONFIG, ApiService) {
            let data = {
                code: "event",
                typeApi: ["*"],
                id: null,
                url: "/api/event",
                customApi: []
            };
            ApiService.createFn(data);
        });
})();


