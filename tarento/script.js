(function () {
    var app = angular.module('myApp', []);
    app.directive('flexi', function () {
        return {
            restrict: 'E',
            scope: {
                config: '=',
                title: '@',
                onsubmit: '&',
                resultObject: '='
            },
            templateUrl: 'items.html'
        };
    });

    app.controller('flexiController', ['$scope', '$http', function ($scope, $http) {

        $http.get('data.json').then(function (flextData) {
            $scope.flexiConfig = flextData.data.items;
        });

        $scope.result = {};

        $scope.onFlexiSubmit = function () {
            document.getElementById('response').style.display = 'block';
            $scope.personName = document.getElementById('inputBox').value;
            $scope.result.personname = $scope.personName;
            
            $scope.selectedState = document.getElementById('selectBox');
            $scope.stateName = $scope.selectedState.options[$scope.selectedState.selectedIndex].value;
            $scope.result.states = $scope.stateName;
        };

    }]);
})();