angular.module("notices",["ui.router"])
.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("landing",{
    url:"/",
    templateUrl:"./views/landing/landing.html",
    controller:""
  })
  $urlRouterProvider.otherwise("/");
}]);
