angular.module("Auth").service('AuthService', ['$rootScope', '$http',
  function ($rootScope, $http, ) {
    var _this = this;

    //get type
    this.getType = () => {
      return new Promise(function (resolve, reject) {
        var access_token = localStorage.getItem('access_token');
        $http.get(MyConfig.host + "/api/type", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + access_token
          }
        })
          .then(function (response) {
            resolve(response);
          }, function (error) {
            reject(error);
          });
      })
    };

    // đăng nhập
    this.login = (username, password, remember) => {
      return new Promise(function (resolve, reject) {

        $http.post(MyConfig.host + "/api/login", { username: username, password: password }, {
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then(function (response) {
            _this.saveToken(response.data.data);
            resolve(response);
          }, function (error) {
            console.log("Đăng nhập thất bại: %o", error);
            reject(error);
          });
      })
    };

    this.saveToken = (data) => {
      let access_expireTime = new Date().getTime() + data.expireTime;
      localStorage.setItem('access_token', data.token);
      localStorage.setItem('access_expireTime', access_expireTime);
    };

    // check has token
    this.checkHasToken = () => {
      let isTooken = !!localStorage.getItem('access_token');
      let now = new Date().getTime();
      let access_expireTime = localStorage.getItem('access_expireTime');

      if (isTooken) {
        if (now < access_expireTime) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }

    };

    // đăng xuất
    this.logout = () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('access_expireTime');
      return;
    };

    // check quyền truy cập module
    this.checkFunctionRoute = (menuConfig, toState) => {
      if (menuConfig) {
        for (let j = 0; j < menuConfig.length; j++) {
          let menuItem = menuConfig[j];
          if (menuItem.state == toState && menuItem.access) {
            if (menuItem.update) {
              return ({ access: true, update: true });
            }
            else {
              return ({ access: true, update: false });
            }
          }
          if (menuItem.childItems) {
            for (let k = 0; k < menuItem.childItems.length; k++) {
              let childItem = menuItem.childItems[k];
              if (childItem.state == toState && childItem.access) {
                if (childItem.update) {
                  return ({ access: true, update: true });
                }
                else {
                  return ({ access: true, update: false });
                }
              }
              if (childItem.childItems) {
                for (let h = 0; h < childItem.childItems.length; h++) {
                  let childItem2 = childItem.childItems[h];
                  if (childItem2.state == toState && childItem2.access) {
                    if (childItem2.update) {
                      return ({ access: true, update: true });
                    }
                    else {
                      return ({ access: true, update: false });
                    }
                  }
                }
              }
            }
          }
        }
      }

      return false;
    };


  }
]);
