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

        $scope.result = {
            name: 'Nidhi Singh'
        };

        $scope.onFlexiSubmit = function (item) {
            console.log('here');
        };

    }]);
})();