var app = angular.module('myApp', []);

app.controller('flexiController', ['$scope', '$http', function ($scope, $http) {
    console($scope.config);
        $scope.onFlexiSubmit = function () {
            var result = {};
            document.getElementById('response').style.display = 'block';

            for(var item of $scope.config) {
                if(item.type === 'TextField') {
                    result[item.name] = document.getElementsByName(item.name)[0].value;
                } else if(item.type === 'DropDown') {
                    var dropdown = document.getElementsByName(item.name)[0];
                    result[item.name] = dropdown.options[dropdown.selectedIndex].value;
                }
            }
            $ctrl.onSubmitHandler && $ctrl.onSubmitHandler(result);
        };

    }]);