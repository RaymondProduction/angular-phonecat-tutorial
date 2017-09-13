'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
   templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
      // Since we are making the assignment of the
      // phones property in a callback function,
      // where the this value is not defined,
      // we also introduce a local variable called
      // self that points back to the controller instance.
      var self = this;
      self.orderProp = 'age';
      $http.get('phones/phones.json').then(function(response){
        self.phones = response.data;
      })
    }
  });
