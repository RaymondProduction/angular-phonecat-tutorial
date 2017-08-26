describe('greetUser', function() {

  // Load the module that contains the `greetUser` component before each test
  beforeEach(module('greetUser'));

  // Test the controller
  describe('NameController', function() {

    it('should create a `name` model with text `Hello Raymond`', inject(function($componentController) {
      var ctrl = $componentController('greetUser');
      expect(ctrl.name).toBe('Hello Raymond!');
    }));

  });

});
