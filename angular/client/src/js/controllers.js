
var sandboxCtrl = function($window, $http) {

  var vm = this;

  const loginUrl = 'http://gvmcrm.pyshop.ru/api/auth/login/'
  const ls = $window.localStorage;

  var login = function(user) {
    $http.post(loginUrl, user)
    .then(
      (res) => {
        console.log(res);
        ls.setItem('token', res.data.auth_token);
      },
      (err) => console.error(err)
    );

    console.log(ls);
  }

  vm.login = () => login({
    email: 'admin@example.com',
    password: 'admin'
  });

  vm.logout = () => {
    ls.removeItem('token');
    console.log(ls)
  };

  $http.get('http://gvmcrm.pyshop.ru/api/auth/me/')
  .then(
    (res) => console.log(res),
    (err) => console.log(err)
  );

  console.log(ls);

  return vm
}
angular.module('app').controller('sandboxCtrl', ['$window', '$http', sandboxCtrl]);
