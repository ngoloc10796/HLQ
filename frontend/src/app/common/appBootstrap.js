deferredBootstrapper.bootstrap({
  element: document,
  module: "MyApp",
  injectorModules: "Auth",
  resolve: {
    APP_CONFIG: [
      "$http",
      "AuthService",
      function ($http, AuthService) {
        App.blockUI();
        //create language
        let translations_vi = {};
        let translations_en = {};
        let language = {};

        App_Dictionary.forEach(item => {
          translations_vi[item[0]] = item[1];
          translations_en[item[0]] = item[2];
        });
        if (MyConfig.language == "vi") {
          language = translations_vi;
        }
        if (MyConfig.language == "en") {
          language = translations_en;
        }

        //create menu
        let listMenuItem = [];
        listMenuItem = [

          //Menu 3 cấp childItems

          /* {
            title: language."Danh mục mẫu",
            showInMenuIsRoles: ["Contributor", "Sale", "CustomerCare", "User"], ["*"] or array[role] or [];
            accessIsRoles: ["*"],  ["*"] or array[role] or [];
            updateIsRoles: ["*"],  ["*"] or array[role] or [];
            iconClass: "fa fa-list",
            state: null, Menu cha thì state = null;
            activeState: null,
            childItems: [{ array[object] or null
              title: language.c_list + "Danh mục mẫu",
              showInMenuIsRoles: ["*"],
              accessIsRoles: ["*"],
              updateIsRoles: ["*"],
              iconClass: null,
              state: "admin.demo.list",
              activeState: [ array[string] or null; để active menu khi truy cập vào các view con, chỉ cần thêm thuộc tính này ở state đặt tại menu nếu có trang con
                "admin.demo.create", "admin.demo.edit", "admin.demo.detail",
              ],
              childItems: null array[object] or null
            }]
          }, */

          /* {
            title: language.Feedback,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-comments",
            state: null,
            activeState: null,
            childItems: [
              {
                title: language.c_list +" "+language.feedback,
                showInMenuIsRoles: ["*"],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.feedback.list",
                activeState: [
                  "admin.feedback.create", "admin.feedback.update", "admin.feedback.detail",
                ],
                childItems: null
              },
              {
                title: language.c_create +" "+language.feedback,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.feedback.create",
                activeState: null,
                childItems: null
              },
              {
                title: language.c_update +" "+language.feedback,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.feedback.update",
                activeState: null,
                childItems: null
              },
              {
                title: language.c_detail +" "+language.feedback,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.feedback.detail",
                activeState: null,
                childItems: null
              }
            ]
          }, */

          {
            title: language.location,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-map-marker",
            state: null,
            activeState: null,
            childItems: [
              {
                title: language.c_list + " " + language.province,
                showInMenuIsRoles: ["*"],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.province.list",
                activeState: [
                  "admin.province.create", "admin.province.update", "admin.province.detail",
                ],
                childItems: null
              },
              {
                title: language.c_create + " " + language.province,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.province.create",
                activeState: null,
                childItems: null
              },
              {
                title: language.c_update + " " + language.province,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.province.update",
                activeState: null,
                childItems: null
              },
              {
                title: language.c_detail + " " + language.province,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.province.detail",
                activeState: null,
                childItems: null
              },
              {
                title: language.c_list + " " + language.district,
                showInMenuIsRoles: ["*"],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.district.list",
                activeState: [
                  "admin.district.create", "admin.district.update", "admin.district.detail",
                ],
                childItems: null
              },
              {
                title: language.c_create + " " + language.district,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.district.create",
                activeState: null,
                childItems: null
              },
              {
                title: language.c_update + " " + language.district,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.district.update",
                activeState: null,
                childItems: null
              },
              {
                title: language.c_detail + " " + language.district,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.district.detail",
                activeState: null,
                childItems: null
              },

              {
                title: language.c_list + " " + language.commune,
                showInMenuIsRoles: ["*"],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.commune.list",
                activeState: [
                  "admin.commune.create", "admin.commune.update", "admin.commune.detail",
                ],
                childItems: null
              },
              {
                title: language.c_create + " " + language.commune,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.commune.create",
                activeState: null,
                childItems: null
              },
              {
                title: language.c_update + " " + language.commune,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.commune.update",
                activeState: null,
                childItems: null
              },
              {
                title: language.c_detail + " " + language.commune,
                showInMenuIsRoles: [],
                accessIsRoles: ["*"],
                updateIsRoles: ["*"],
                iconClass: null,
                state: "admin.commune.detail",
                activeState: null,
                childItems: null
              },
            ]
          },

          //nation  dân tộc
          {
            title: language.Nation,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-globe",
            state: "admin.nation.list",
            activeState: [
              "admin.nation.create", "admin.nation.update", "admin.nation.detail",
            ],
            childItems: null
          },
          {
            title: language.c_create + " " + language.nation,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.nation.create",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_update + " " + language.nation,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.nation.update",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_detail + " " + language.nation,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.nation.detail",
            activeState: null,
            childItems: null
          },


          //school trường
          {
            title: language.School,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-graduation-cap",
            state: "admin.school.list",
            activeState: [
              "admin.school.create", "admin.school.update", "admin.school.detail",
            ],
            childItems: null
          },
          {
            title: language.c_create + " " + language.school,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.school.create",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_update + " " + language.school,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.school.update",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_detail + " " + language.school,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.school.detail",
            activeState: null,
            childItems: null
          },


          //chuyên ngành
          {
            title: language.Specialize,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-folder-open",
            state: "admin.specialize.list",
            activeState: [
              "admin.specialize.create", "admin.specialize.update", "admin.specialize.detail",
            ],
            childItems: null
          },
          {
            title: language.c_create + " " + language.specialize,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.specialize.create",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_update + " " + language.specialize,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.specialize.update",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_detail + " " + language.specialize,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.specialize.detail",
            activeState: null,
            childItems: null
          },

          //source nguồn tuyển sinh
          {
            title: language.Source,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-rss",
            state: "admin.source.list",
            activeState: [
              "admin.source.create", "admin.source.update", "admin.source.detail",
            ],
            childItems: null
          },
          {
            title: language.c_create + " " + language.source,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.source.create",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_update + " " + language.source,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.source.update",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_detail + " " + language.source,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.source.detail",
            activeState: null,
            childItems: null
          },

          //prioritize ưu tiên
          {
            title: language.Prioritize,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-user",
            state: "admin.prioritize.list",
            activeState: [
              "admin.prioritize.create", "admin.prioritize.update", "admin.prioritize.detail",
            ],
            childItems: null
          },
          {
            title: language.c_create + " " + language.prioritize,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.prioritize.create",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_update + " " + language.prioritize,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.prioritize.update",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_detail + " " + language.prioritize,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.prioritize.detail",
            activeState: null,
            childItems: null
          },

          //aspiration nguyện vọng
          {
            title: language.Aspiration,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-star",
            state: "admin.aspiration.list",
            activeState: [
              "admin.aspiration.create", "admin.aspiration.update", "admin.aspiration.detail",
            ],
            childItems: null
          },
          {
            title: language.c_create + " " + language.aspiration,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.aspiration.create",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_update + " " + language.aspiration,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.aspiration.update",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_detail + " " + language.aspiration,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.aspiration.detail",
            activeState: null,
            childItems: null
          },


          //collaborator nguyện vọng
          {
            title: language.Collaborator,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-users",
            state: "admin.collaborator.list",
            activeState: [
              "admin.collaborator.create", "admin.collaborator.update", "admin.collaborator.detail",
            ],
            childItems: null
          },
          {
            title: language.c_create + " " + language.collaborator,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.collaborator.create",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_update + " " + language.collaborator,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.collaborator.update",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_detail + " " + language.collaborator,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.collaborator.detail",
            activeState: null,
            childItems: null
          },

          //chương trình
          {
            title: language.Event,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-calendar-o",
            state: "admin.event.list",
            activeState: [
              "admin.event.create", "admin.event.update", "admin.event.detail",
            ],
            childItems: null
          },
          {
            title: language.c_create + " " + language.event,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.event.create",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_update + " " + language.event,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.event.update",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_detail + " " + language.event,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.event.detail",
            activeState: null,
            childItems: null
          },


          //đăng ký
          {
            title: language.Register,
            showInMenuIsRoles: ["*"],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: "fa fa-graduation-cap",
            state: "admin.register.list",
            activeState: [
              "admin.register.create", "admin.register.update", "admin.register.detail",
            ],
            childItems: null
          },
          {
            title: language.c_create + " " + language.register,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.register.create",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_update + " " + language.register,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.register.update",
            activeState: null,
            childItems: null
          },
          {
            title: language.c_detail + " " + language.register,
            showInMenuIsRoles: [],
            accessIsRoles: ["*"],
            updateIsRoles: ["*"],
            iconClass: null,
            state: "admin.register.detail",
            activeState: null,
            childItems: null
          },

        ];

        var createMenu = function (roles) {
          for (let i = 0; i < roles.length; i++) {
            for (let j = 0; j < listMenuItem.length; j++) {
              let menuItem = listMenuItem[j];
              if (!menuItem.visible && menuItem.showInMenuIsRoles.indexOf(roles[i]) != -1 || menuItem.showInMenuIsRoles.indexOf("*") == 0) {
                menuItem.visible = true;
              }
              if (!menuItem.access && menuItem.accessIsRoles.indexOf(roles[i]) != -1 || menuItem.accessIsRoles.indexOf("*") == 0) {
                menuItem.access = true;
              }
              if (!menuItem.update && menuItem.updateIsRoles.indexOf(roles[i]) != -1 || menuItem.updateIsRoles.indexOf("*") == 0) {
                menuItem.update = true;
              }

              if (menuItem.childItems) {
                for (let k = 0; k < menuItem.childItems.length; k++) {
                  let childItem = menuItem.childItems[k];
                  if (!childItem.visible && childItem.showInMenuIsRoles.indexOf(roles[i]) != -1 || childItem.showInMenuIsRoles.indexOf("*") == 0) {
                    childItem.visible = true;
                  }
                  if (!childItem.access && childItem.accessIsRoles.indexOf(roles[i]) != -1 || childItem.accessIsRoles.indexOf("*") == 0) {
                    childItem.access = true;
                  }
                  if (!childItem.update && childItem.updateIsRoles.indexOf(roles[i]) != -1 || childItem.updateIsRoles.indexOf("*") == 0) {
                    childItem.update = true;
                  }

                  if (childItem.childItems) {
                    for (let h = 0; h < childItem.childItems.length; h++) {
                      let childItem2 = childItem.childItems[h];
                      if (!childItem2.visible && childItem2.showInMenuIsRoles.indexOf(roles[i]) != -1 || childItem2.showInMenuIsRoles.indexOf("*") == 0) {
                        childItem2.visible = true;
                      }
                      if (!childItem2.access && childItem2.accessIsRoles.indexOf(roles[i]) != -1 || childItem2.accessIsRoles.indexOf("*") == 0) {
                        childItem2.access = true;
                      }
                      if (!childItem2.update && childItem2.updateIsRoles.indexOf(roles[i]) != -1 || childItem2.updateIsRoles.indexOf("*") == 0) {
                        childItem2.update = true;
                      }
                    }
                  }
                }
              }

            }
          }
          return listMenuItem;
        };

        return new Promise(function (resolve, reject) {
          var newMenu = createMenu(["*"]);
          App.unblockUI();

          /* AuthService.getType().then(function(res){
            res.data.data.content
            resolve({
              userInfo: "admin",
              menuConfig: newMenu,
              languageConfig: {
                translations_vi: translations_vi,
                translations_en: translations_en,
                language: language
              }
            });
          },function(){
            resolve({
              userInfo: "admin",
              menuConfig: newMenu,
              languageConfig: {
                translations_vi: translations_vi,
                translations_en: translations_en,
                language: language
              }
            });
          }); */

          resolve({
            userInfo: "admin",
            menuConfig: newMenu,
            languageConfig: {
              translations_vi: translations_vi,
              translations_en: translations_en,
              language: language
            }
          });

          /* AuthService.me().then(function (res) {
            var newMenu = createMenu(res.roles);
            App.unblockUI();
            resolve({
              userInfo: res,
              menuConfig: newMenu,
              languageConfig: {
                translations_vi: translations_vi,
                translations_en: translations_en,
                language: language
              }
            });
          }, function (err) {
            App.unblockUI();
            resolve({
              userInfo: null,
              menuConfig: null,
              languageConfig: {
                translations_vi: translations_vi,
                translations_en: translations_en,
                language: language
              }
            });
          }); */

        });

      }
    ]
  }
});
