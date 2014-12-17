'use strict';

/* Controllers */

var shoppingListApp = angular.module('shoppingListApp', []);

shoppingListApp.controller('shoppingListCtrl', function($scope) {

  $scope.tobuy = [

  ];

  $scope.bought = [

  ];

  $scope.itemIn = "";
  $scope.jib = 0;

  $scope.add = function (item) {
    $scope.tobuy.push({"name":item, "jib": $scope.jib++});
    $scope.itemIn = "";

  };

  $scope.remove = function (item) {
    $scope.tobuy.splice(item, 1);
  };
  
  $scope.moveDown = function (item) {
    $scope.bought.push(item);
    $scope.tobuy.splice(item, 1);

  };

  $scope.moveUp = function (item) {
    $scope.tobuy.push(item);
    $scope.bought.splice(item, 1);

  };
});