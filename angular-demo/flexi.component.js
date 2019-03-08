// Register `flexi` component, along with its associated controller and template
angular.
  module('flexiApp').
  component('flexi', {  // This name is what AngularJS uses to match to the `<flexi>` element.
    template:
	'<div>' +
    	'<div ng-repeat="item in $ctrl.items">' +
        	'<div ng-if="item.type == \'TextField\'">' +
			'<label> {{item.label}} :' +
			'<input type="text" name="item.name" ng-model="item.name" required>' +
		'</label>' +
            	'</div>' +
		'<div ng-if="item.type == \'DropDown\'">' +
			'<label> {{item.label}} :' +
			'<select ng-model="item.name">' +
			'<option ng-repeat="option in item.values" value="{{ option }}">{{option}}</option>' +
			'</select>' +
			'</label>' +
            	'</div>' +
	'</div>' +
	'<button ng-click="submit()">submit</button>' +
        '</div>',
    controller: function PhoneListController() {
      this.items = [
        {
		"name": "personname",
		"label": "Person's Name",
		"type": "TextField"
        }, {
		"name": "states",
		"label": "Person's state",
		"type": "DropDown",
		"values": ["Maharashtra", "Kerala", "Tamil Nadu"]
        }
      ];
    }
  });