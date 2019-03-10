var app = angular.module('myApp', []);
    app.directive('flexi', function () {
        return {
            restrict: 'E',
            scope: {
                config: '=',
                onSubmitHandler: '&'
            },
            templateUrl: 'items.html',
        };
    });