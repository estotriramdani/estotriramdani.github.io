var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/profile.html",
    })
    .when("/home", {
      templateUrl: "pages/home.html",
    })
    .when("/profile", {
      templateUrl: "pages/profile.html",
    })
    .when("/certificates", {
      templateUrl: "pages/cert.html",
    })
    .when("/portfolios", {
      templateUrl: "pages/port.html",
    })
    .when("/experiences", {
      templateUrl: "pages/exp.html",
    });
});
