var app = angular.module('myApp', []);

app.controller('MyCtrl', function($scope, $http){
    // a scope function to load the data
    $scope.loadDate = function(){
        $http.get('/api/movies').success(function(data){
            $scope.items = data;
        });
    };
});
