// Register `greetUser` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('greetUser', {
    template:
        '<span>{{$ctrl.name}}</span>' ,
    controller: function NameController() {
      this.name='Hello Raymond!';
  }
});
