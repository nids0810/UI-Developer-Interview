#index.html#
<!DOCTYPE html>
<html>

<head>
	<script data-require="angular.js@1.5.0" data-semver="1.5.0" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js">
	</script>
	<script src="script.js">
	</script>
</head>

<body ng-app="myApp">

	<div ng-controller="main">
		<flexi config="items" title="Angular To-do"></flexi>
	</div>

</body>

</html>

#script.js#
// Code goes here
var app = angular.module('myApp', []);

app.directive('flexi', function() {
  return {
    restrict: 'EA',
    templateUrl: 'todo.tpl.html',
    scope: {
      config: '=',
      title: '@'
    }
  };
});


app.controller('main', function($scope) {
  $scope.items = [{
    "name": "personname",
    "label": "Person's Name",
    "type": "TextField"
  }, {
    "name": "states",
    "label": "Person's state",
    "type": "DropDown",
    "values": ["Maharashtra", "Kerala", "Tamil Nadu"]
  }];
});

#todo.tpl.html#
<h1>{{title}}</h1>
<div ng-repeat="items in config">
  <div ng-if="items.type == 'TextField'">
    <label> {{items.label}} :
    <input type="text" name="items.name" ng-model="items.name" required>
    </label>
  </div>
  <div ng-if="items.type == 'DropDown'">
    <label> {{items.label}} :
    <select ng-model="items.name">
      <option ng-repeat="option in items.values" value="{{option}}">{{option}}</option>
    </select>
    </label>
  </div>
</div>
