var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/profile.html",
    })
    .when("/profile", {
      templateUrl: "pages/profile.html",
    })
    .when("/blue", {
      templateUrl: "blue.htm",
    });
});
