angular.module("Auth").service('AuthService', ['$rootScope', '$http',
  function ($rootScope, $http, ) {
    var _self = this;

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
            _self.saveToken(response.data.data);
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

    /* // Kiểm tra trạng thái đăng nhập
    this.status = () => {
      return new Promise(function (resolve, reject) {
        mushroom.$auth.status()
          .done(function (response) {
            console.log("status = " + response.status);
            if (response.status == "logged-in") {
              resolve(response.status);
            }
            else {
              reject(response.status);
            }
          })
          .fail(function (error) {
            console.log("Có lỗi: %o", error);
            reject(error);
          });
      })
    };

    // Lấy về thông tin người dùng hiện tại
    this.me = () => {
      return new Promise(function (resolve, reject) {
        mushroom.$auth.me()
          .done(function (response) {
            console.log("response data: %o", response);
            resolve(response);
          })
          .fail(function (error) {
            console.log("Có lỗi: %o", error);
            reject(error);
          })
      });
    };

    // đăng ký
    this.register = (account, password) => {
      return new Promise(function (resolve, reject) {
        mushroom.$auth.register(account, password)
          .done(function (response) {
            if (response.requireActivation)
              console.log("Đăng ký thành công, bạn hãy checkmail để kích hoạt tài khoản");
            else
              console.log("Đăng ký thành công");
            resolve(response);
          })
          .fail(function (error) {
            console.log("Đăng ký thất bại: %o", error);
            reject(error);
          });
      })
    };

    // kick hoạt tài khoản
    this.activate = (account, activationCode) => {
      return new Promise(function (resolve, reject) {
        mushroom.$auth.activate(account, activationCode)
          .done(function (response) {
            console.log("Kích hoạt thành công");
            resolve(response);
          })
          .fail(function (error) {
            console.log("Kích hoạt thất bại: %o", error);
            reject(error);
          })
      });
    };

    // lấy lại mật khẩu
    this.recoverPassword = (account) => {
      return new Promise(function (resolve, reject) {
        mushroom.$auth.recoverPassword(account)
          .done(function (response) {
            console.log("Bạn hãy check mail để lấy lại mật khẩu");
            resolve(response);
          })
          .fail(function (error) {
            console.log("Có lỗi: %o", error);
            reject(error);
          })
      });
    };

    // khôi phục mật khẩu
    this.resetPassword = (account, code, newPassword) => {
      return new Promise(function (resolve, reject) {
        mushroom.$auth.resetPassword(account, code, newPassword)
          .done(function (response) {
            console.log("Đã đặt lại mật khẩu dựa trên mã khôi phục mật khẩu");
            resolve(response);
          })
          .fail(function (error) {
            console.log("Có lỗi: %o", error);
            reject(error);
          })
      });

    };

    // đổi mật khẩu
    this.changePassword = (account, password, newPassword) => {
      return new Promise(function (resolve, reject) {
        mushroom.$auth.changePassword(account, password, newPassword)
          .done(function (response) {
            console.log("Đã đổi mật khẩu thành công");
            resolve(response);
          })
          .fail(function (error) {
            console.log("Có lỗi: %o", error);
            reject(error);
          });
      })
    }; */

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
