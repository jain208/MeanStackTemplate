"use strict";angular.module("clientApp",["ui.router"]).run(["$rootScope",function(a){a.$on("$stateChangeStart",function(a,b){console.log(b)})}]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.when("/","/notes"),b.otherwise("/notes"),a.state("home",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("home.notes",{url:"notes",templateUrl:"views/notes.html",controller:"NotesCtrl"}).state("home.register",{url:"register",templateUrl:"views/register.html"}).state("home.login",{url:"login",templateUrl:"views/login.html"}).state("home.notes.category",{url:"/:category",templateUrl:"views/category.html",controller:"NotesCategoryController"})}]),angular.module("clientApp").service("NotesService",["$http","$q",function(a,b){var c=function(){var c=b.defer();return a.get("/api/notes").success(function(a){c.resolve(a)}).error(function(a){c.reject(a)}),c.promise};return{getNotes:c}}]),angular.module("clientApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("clientApp").controller("NotesCtrl",["$scope","NotesService",function(a,b){function c(){b.getNotes().then(function(b){a.data.categories=b.categories,console.log(a.data.categories)},function(a){console.log(a)})}a.data={categories:[]},c()}]),angular.module("clientApp").controller("NotesCategoryController",["$scope","$stateParams",function(a,b){console.log(b),a.category=b.category}]);