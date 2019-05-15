MyApp.service('ApiService', ['$rootScope', 'APP_CONFIG','Restangular',
  function ($rootScope, APP_CONFIG, Restangular) {
    let a_language = APP_CONFIG.languageConfig.language
    var _this = this;

    function checkSuccess(resolve, type, res, mess) {
      if (mess) {
        if(mess.success){
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
          if(res.info.meta && res.info.meta.successIds && res.info.meta.successIds.length>0){
            toastr.success(a_language.c_delete + " " + res.info.meta.successIds.length + " " + a_language.c_record + " " + a_language.c_success);
          }
          if(res.info.meta && res.info.meta.failureIds && res.info.meta.failureIds.length>0){
            toastr.error(a_language.c_delete + " " + res.info.meta.failureIds.length + " " + a_language.c_record + " " + a_language.c_success);
          }       
        }
      }
      resolve(res);
    };

    function checkError(reject, type, err, mess) {
      if (mess) {
        if(mess.error){
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

    function createFn(item_module,item_id){
      let url = "/api/category";

      _this[item_module] = {
        findById: function (id, objMessage) {
          //objData.typeCode = item_module;
          //objData.typeId = item_id;
          return new Promise(function (resolve, reject) {
            Restangular.all(url).customGET(id).then(function (response){
              checkSuccess(resolve, "findById", response, objMessage);
            },function(error){
              checkError(reject, "findById", error, objMessage);
            });

            /* mushroom.faq.findById({ id: id })
              .done(function (response) {
                checkSuccess(resolve, "findById", response, objMessage);
              })
              .fail(function (error) {
                checkError(reject, "findById", error, objMessage);
              }); */
          });
        },

        list: function (objData, objMessage) {
          objData.typeCode = item_module;
          objData.typeId = item_id;
          return new Promise(function (resolve, reject) {
            Restangular.all(url).customGET("", objData).then(function (response, info){
              checkSuccess(resolve, "list", { data: response.data, info: info }, objMessage);
            },function(error){
              checkError(reject, "list", error, objMessage);
            });


              // .done(function (response, info) {
              //   checkSuccess(resolve, "list", { data: response, info: info }, objMessage);
              // })
              // .fail(function (error) {
              //   checkError(reject, "list", error, objMessage);
              // });

          });
        },

        create: function (objData, objMessage) {
          objData.typeCode = item_module;
          objData.typeId = item_id;
          return new Promise(function (resolve, reject) {
            Restangular.all(url).customPOST(objData).then(function (response){
              checkSuccess(resolve, "create", response, objMessage);
            },function(error){
              checkError(reject, "create", error, objMessage);
            });

            /* mushroom.faq.create(objData)
              .done(function (response) {
                checkSuccess(resolve, "create", response, objMessage);
              })
              .fail(function (error) {
                checkError(reject, "create", error, objMessage);
              }); */

          });
        },

        update: function (objData, objMessage) {
          objData.typeCode = item_module;
          objData.typeId = item_id;
          return new Promise(function (resolve, reject) {
            Restangular.all(url).customPUT(objData).then(function (response){
              checkSuccess(resolve, "update", response, objMessage);
            },function(error){
              checkError(reject, "update", error, objMessage);
            });

            /* mushroom.faq.partialUpdate(objData)
              .done(function (response) {
                checkSuccess(resolve, "update", response, objMessage);
              })
              .fail(function (error) {
                checkError(reject, "update", error, objMessage);
              }); */
          });
        },

        delete: function (id, objMessage) {
          // objData.typeCode = item_module;
          return new Promise(function (resolve, reject) {
            Restangular.all(url).customDELETE(id).then(function (response){
              checkSuccess(resolve, "delete", response, objMessage);
            },function(error){
              checkError(reject, "delete", error, objMessage);
            });

            /* mushroom.faq.delete({ id: id })
              .done(function (response) {
                checkSuccess(resolve, "delete", response, objMessage);
              })
              .fail(function (error) {
                checkError(reject, "delete", error, objMessage);
              }); */
          });
        },

        deleteList: function (arr, objMessage) {
          return new Promise(function (resolve, reject) {
            mushroom.faq.batchDelete(arr)
              .done(function (response, info) {
                checkSuccess(resolve, "deleteList", { response: response, info: info }, objMessage);
              })
              .fail(function (error) {
                checkError(reject, "deleteList", error, objMessage);
              });
          });
        }
      }
    };

    var listModule = [{"code":"province","id":"1"},{"code":"district","id":"2"},{"code":"commune","id":"3"}];

    $.each(listModule,function(index,val){
      createFn(val.code,val.id);
    });

    let url = "/api/register";
    _this['register'] = {      
      findById: function (id, objMessage) {
        //objData.typeCode = item_module;
        //objData.typeId = item_id;
        return new Promise(function (resolve, reject) {
          Restangular.all(url).customGET(id).then(function (response){
            checkSuccess(resolve, "findById", response, objMessage);
          },function(error){
            checkError(reject, "findById", error, objMessage);
          });

          /* mushroom.faq.findById({ id: id })
            .done(function (response) {
              checkSuccess(resolve, "findById", response, objMessage);
            })
            .fail(function (error) {
              checkError(reject, "findById", error, objMessage);
            }); */
        });
      },

      list: function (objData, objMessage) {
        // objData.typeCode = item_module;
        // objData.typeId = item_id;
        return new Promise(function (resolve, reject) {
          Restangular.all(url).customGET("", objData).then(function (response, info){
            checkSuccess(resolve, "list", { data: response.data, info: info }, objMessage);
          },function(error){
            checkError(reject, "list", error, objMessage);
          });


            // .done(function (response, info) {
            //   checkSuccess(resolve, "list", { data: response, info: info }, objMessage);
            // })
            // .fail(function (error) {
            //   checkError(reject, "list", error, objMessage);
            // });

        });
      },

      create: function (objData, objMessage) {
        // objData.typeCode = item_module;
        // objData.typeId = item_id;
        return new Promise(function (resolve, reject) {
          Restangular.all(url).customPOST(objData).then(function (response){
            checkSuccess(resolve, "create", response, objMessage);
          },function(error){
            checkError(reject, "create", error, objMessage);
          });

          /* mushroom.faq.create(objData)
            .done(function (response) {
              checkSuccess(resolve, "create", response, objMessage);
            })
            .fail(function (error) {
              checkError(reject, "create", error, objMessage);
            }); */

        });
      },

      update: function (objData, objMessage) {
        // objData.typeCode = item_module;
        // objData.typeId = item_id;
        return new Promise(function (resolve, reject) {
          Restangular.all(url).customPUT(objData).then(function (response){
            checkSuccess(resolve, "update", response, objMessage);
          },function(error){
            checkError(reject, "update", error, objMessage);
          });

          /* mushroom.faq.partialUpdate(objData)
            .done(function (response) {
              checkSuccess(resolve, "update", response, objMessage);
            })
            .fail(function (error) {
              checkError(reject, "update", error, objMessage);
            }); */
        });
      },

      delete: function (id, objMessage) {
        // objData.typeCode = item_module;
        return new Promise(function (resolve, reject) {
          Restangular.all(url).customDELETE(id).then(function (response){
            checkSuccess(resolve, "delete", response, objMessage);
          },function(error){
            checkError(reject, "delete", error, objMessage);
          });

          /* mushroom.faq.delete({ id: id })
            .done(function (response) {
              checkSuccess(resolve, "delete", response, objMessage);
            })
            .fail(function (error) {
              checkError(reject, "delete", error, objMessage);
            }); */
        });
      },

      deleteList: function (arr, objMessage) {
        return new Promise(function (resolve, reject) {
          mushroom.faq.batchDelete(arr)
            .done(function (response, info) {
              checkSuccess(resolve, "deleteList", { response: response, info: info }, objMessage);
            })
            .fail(function (error) {
              checkError(reject, "deleteList", error, objMessage);
            });
        });
      }
    }

  }
]);
