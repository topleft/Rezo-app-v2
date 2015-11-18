(function () {

  'usestrict';

 angular.module('app').controller('appController', ['$mdSidenav',  function($mdSidenav) {
  var vm = this;
  vm.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

}]);


})();