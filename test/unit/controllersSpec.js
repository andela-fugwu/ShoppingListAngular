'use strict';

/* jasmine specs for controllers go here */
describe('shoppingListApp controllers', function() {

  describe('shoppingListCtrl', function(){
    var scope, ctrl;

    beforeEach(module('shoppingListApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('shoppingListCtrl', {$scope:scope});
    }));


    it('should create "phones" model with 3 phones', function() {
      expect(scope.bought.length).toBe(2);
    });

  });
});
