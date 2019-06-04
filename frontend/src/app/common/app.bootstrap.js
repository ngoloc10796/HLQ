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

        let listMenuItem = myApp.configMenu.sort(function (a, b) { return a.index - b.index });
        
        //Menu 3 cấp childItems
        /* {
          title: language."Danh mục mẫu",
          index: numbber,
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

          resolve({
            userInfo: "admin",
            menuConfig: newMenu,
            languageConfig: myApp.configLanguage
          });

        });

      }
    ]
  }
});
