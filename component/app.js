var app = angular.module('myApp', []);

app.controller('appController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data.json').then(function (flextData) {
        $scope.flexiConfig = flextData.data.items;
    });

    $scope.onSubmitHandler = function(result) {
        $scope.response = result;
    }
}]);