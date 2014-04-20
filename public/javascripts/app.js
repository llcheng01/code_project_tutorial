var app = angular.module('myApp', []);

app.controller('MyCtrl', function($scope, $http){
    // a scope function to load the data
    $scope.loadData = function(){
        $http.get('/api/movies').success(function(data){
            $scope.items = data;
        });
    };
    $scope.items = [
        {'id': '001', 'title': 'William Copeland'},
        {'id': '002', 'title': 'Shane Koyczan'}
    ];
});
