
(function () {
    'use strict';
    angular.module('MyApp')
    .run(function ($rootScope, APP_CONFIG, ApiService) {
        /* let data = { 
            code: "feedback", //(required) string, tên module
            typeApi: ["*"], //(required) arr[stringRole], mảng role
            customApi: [{name: "disableAccount"}] //arr[object{name: "string, tên của api"}], 
        }; */
        let data = { code: "feedback", typeApi: ["*"] };
        ApiService.createFn(data);
    });
})();


