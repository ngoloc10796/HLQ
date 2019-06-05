MyApp.service('ApiService', ['$rootScope', 'APP_CONFIG', 'Restangular',
  function ($rootScope, APP_CONFIG, Restangular) {
    let a_language = APP_CONFIG.languageConfig.language
    var _this = this;

    function checkSuccess(resolve, type, res, mess) {
      if (mess) {
        if (mess.success) {
          toastr.success(mess.success);
        }
      } else {
        if (type == "findById") {

        }
        if (type == "list") {

        }
        if (type == "create") {
          toastr.success(a_language.c_addSuccess);
        }
        if (type == "update") {
          toastr.success(a_language.c_updateSuccess);
        }
        if (type == "delete") {
          toastr.success(a_language.c_deleteSuccess);
        }
        if (type == "deleteList") {
          if (res.info.meta && res.info.meta.successIds && res.info.meta.successIds.length > 0) {
            toastr.success(a_language.c_delete + " " + res.info.meta.successIds.length + " " + a_language.c_record + " " + a_language.c_success);
          }
          if (res.info.meta && res.info.meta.failureIds && res.info.meta.failureIds.length > 0) {
            toastr.error(a_language.c_delete + " " + res.info.meta.failureIds.length + " " + a_language.c_record + " " + a_language.c_success);
          }
        }
      }
      resolve(res);
    };

    function checkError(reject, type, err, mess) {
      if (mess) {
        if (mess.error) {
          toastr.success(mess.error);
        }
      } else {
        if (type == "findById") {

        }
        if (type == "list") {

        }
        if (type == "create") {
          toastr.error(a_language.c_addError);
        }
        if (type == "update") {
          toastr.error(a_language.c_updateError);
        }
        if (type == "delete") {
          toastr.error(a_language.c_deleteError);
        }
        if (type == "deleteList") {
          toastr.error(a_language.c_deleteError);
        }
      }
      reject(err);
    };

    _this.createFn = function (data) {
      let item_module = data.code;
      let item_id = data.id;
      let item_typeApi = data.typeApi;
      let item_url = data.url;

      let objectFn = {};

      objectFn.fn_findById = function (id, objMessage) {
        return new Promise(function (resolve, reject) {
          Restangular.all(item_url).customGET(id).then(function (response) {
            checkSuccess(resolve, "findById", response, objMessage);
          }, function (error) {
            checkError(reject, "findById", error, objMessage);
          });
        });
      };

      objectFn.fn_list = function (objData, objMessage) {
        objData.typeCode = item_module;
        objData.typeId = item_id;
        return new Promise(function (resolve, reject) {
          Restangular.all(item_url).customGET("", objData).then(function (response, info) {
            checkSuccess(resolve, "list", { data: response.data, info: info }, objMessage);
          }, function (error) {
            checkError(reject, "list", error, objMessage);
          });
        });
      };

      objectFn.fn_create = function (objData, objMessage) {
        objData.typeCode = item_module;
        objData.typeId = item_id;
        return new Promise(function (resolve, reject) {
          Restangular.all(item_url).customPOST(objData).then(function (response) {
            checkSuccess(resolve, "create", response, objMessage);
          }, function (error) {
            checkError(reject, "create", error, objMessage);
          });
        });
      };

      objectFn.fn_update = function (objData, objMessage) {
        objData.typeCode = item_module;
        objData.typeId = item_id;
        return new Promise(function (resolve, reject) {
          Restangular.all(item_url).customPUT(objData).then(function (response) {
            checkSuccess(resolve, "update", response, objMessage);
          }, function (error) {
            checkError(reject, "update", error, objMessage);
          });
        });
      };

      objectFn.fn_delete = function (id, objMessage) {
        return new Promise(function (resolve, reject) {
          Restangular.all(item_url).customDELETE(id).then(function (response) {
            checkSuccess(resolve, "delete", response, objMessage);
          }, function (error) {
            checkError(reject, "delete", error, objMessage);
          });
        });
      };

      objectFn.fn_deleteList = function (arr, objMessage) {
        return new Promise(function (resolve, reject) {
          mushroom.faq.batchDelete(arr)
            .done(function (response, info) {
              checkSuccess(resolve, "deleteList", { response: response, info: info }, objMessage);
            })
            .fail(function (error) {
              checkError(reject, "deleteList", error, objMessage);
            });
        });
      };

      if (data.customApi && data.customApi.length > 0) {
        for (let i = 0; i < data.customApi.length; i++) {
          let item_api = data.customApi[i];

          if (item_api.typeApi == "findById") {

            objectFn[item_api.name] = function (id, objMessage) {
              return new Promise(function (resolve, reject) {
                Restangular.all(item_url).customGET(id).then(function (response) {
                  checkSuccess(resolve, "findById", response, objMessage);
                }, function (error) {
                  checkError(reject, "findById", error, objMessage);
                });
              });
            };
          }

          if (item_api.typeApi == "list") {
            debugger;
            objectFn[item_api.name] = function (objData, objMessage) {
              objData.typeCode = item_module;
              objData.typeId = item_id;
              return new Promise(function (resolve, reject) {
                Restangular.all(item_url).customGET("", objData).then(function (response, info) {
                  checkSuccess(resolve, "list", { data: response.data, info: info }, objMessage);
                }, function (error) {
                  checkError(reject, "list", error, objMessage);
                });
              });
            };

          }

          if (item_api.typeApi == "create") {

            objectFn[item_api.name] = function (objData, objMessage) {
              objData.typeCode = item_module;
              objData.typeId = item_id;
              return new Promise(function (resolve, reject) {
                Restangular.all(item_url).customPOST(objData).then(function (response) {
                  checkSuccess(resolve, "create", response, objMessage);
                }, function (error) {
                  checkError(reject, "create", error, objMessage);
                });
              });
            };

          }
          if (item_api.typeApi == "update") {

            objectFn[item_api.name] = function (objData, objMessage) {
              objData.typeCode = item_module;
              objData.typeId = item_id;
              return new Promise(function (resolve, reject) {
                Restangular.all(item_url).customPUT(objData).then(function (response) {
                  checkSuccess(resolve, "update", response, objMessage);
                }, function (error) {
                  checkError(reject, "update", error, objMessage);
                });
              });
            };

          }

          if (item_api.typeApi == "delete") {

            objectFn[item_api.name] = function (id, objMessage) {
              return new Promise(function (resolve, reject) {
                Restangular.all(item_url).customDELETE(id).then(function (response) {
                  checkSuccess(resolve, "delete", response, objMessage);
                }, function (error) {
                  checkError(reject, "delete", error, objMessage);
                });
              });
            };

          }
          if (item_api.typeApi == "deleteList") {

            objectFn[item_api.name] = function (arr, objMessage) {
              return new Promise(function (resolve, reject) {
                mushroom.faq.batchDelete(arr)
                  .done(function (response, info) {
                    checkSuccess(resolve, "deleteList", { response: response, info: info }, objMessage);
                  })
                  .fail(function (error) {
                    checkError(reject, "deleteList", error, objMessage);
                  });
              });
            };

          }

        }
      }

      _this[item_module] = {};

      if (item_typeApi.indexOf("*") == 0) {

        _this[item_module].findById = objectFn.fn_findById;

        _this[item_module].list = objectFn.fn_list;

        _this[item_module].create = objectFn.fn_create;

        _this[item_module].update = objectFn.fn_update;

        _this[item_module].delete = objectFn.fn_delete;

        _this[item_module].deleteList = objectFn.fn_deleteList;

      }
      else {
        if (item_typeApi.indexOf("findById") != -1) {
          _this[item_module].findById = objectFn.fn_findById;
        }
        if (item_typeApi.indexOf("list") != -1) {
          _this[item_module].list = objectFn.fn_list;
        }
        if (item_typeApi.indexOf("create") != -1) {
          _this[item_module].create = objectFn.fn_create;
        }
        if (item_typeApi.indexOf("update") != -1) {
          _this[item_module].update = objectFn.fn_update;
        }
        if (item_typeApi.indexOf("delete") != -1) {
          _this[item_module].delete = objectFn.fn_delete;
        }
        if (item_typeApi.indexOf("deleteList") != -1) {
          _this[item_module].deleteList = objectFn.fn_deleteList;
        }

      }

      if(data.customApi && data.customApi.length > 0){
        for (let i = 0; i < data.customApi.length; i++) {
          let item_api = data.customApi[i];
          _this[item_module][item_api.name] = objectFn[item_api.name];
        }
      }

    };

  }
]);
