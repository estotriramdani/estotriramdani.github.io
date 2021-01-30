var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/first", {
      templateUrl: "first.html",
    })
    .when("/pages/second", {
      templateUrl: "pages/second.html",
    })
    .when("/", {
      templateUrl: "pages/home.html",
    })
    .when("/blue", {
      templateUrl: "blue.htm",
    });
});
