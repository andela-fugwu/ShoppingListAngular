'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('ShoppingCart App', function() {

  describe('Cart list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the cart list as a user types into the search box', function() {

      var cartList = element.all(by.repeater('cart in carts'));
      var query = element(by.model('query'));

      expect(cartList.count()).toBe(6);

      query.sendKeys('software');
      expect(cartList.count()).toBe(1);

      query.clear();
      query.sendKeys('what');
      expect(cartList.count()).toBe(5);
    });


  });
});
