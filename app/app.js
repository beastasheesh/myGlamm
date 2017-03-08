<<<<<<< HEAD
var myApp = angular.module("myApp", ["angularUtils.directives.dirPagination"]);

myApp.controller("MainController", ['$scope', '$http', function($scope, $http){

  $http.get('data/data.json').then(function(response){
      $scope.bookings = response.data;
      $scope.cityArray = [];
      $scope.statusArray = [];
      angular.forEach($scope.bookings.appointments, function(value, key){

        var exists = false;
        var statusExists = false;
        angular.forEach($scope.cityArray, function(value2, key) {
          if(angular.equals(value.appointment.city.name, value2)){
            exists = true;
          }
        });
        if(exists == false && value.appointment.city.name != ""){
          $scope.cityArray.push(value.appointment.city.name);
        }

        angular.forEach($scope.statusArray, function(value1, key) {
          if(angular.equals(value.appointment.status, value1)){
            statusExists = true;
          }
        });
        if(statusExists == false && value.appointment.status != ""){
          $scope.statusArray.push(value.appointment.status);
        }

      });
    });

}]);
=======
var myApp = angular.module("myApp", []);

myApp.controller("MainController", ['$scope', '$http', function($scope, $http){

  $http.get('data/data.json').then(function(response){
    $scope.bookings = response.data;
    $scope.book = response.data.appointments.appointment.city.name;
  });

}]);
>>>>>>> 457ef48dcde0577c8df7eaf0ca60e913759f09b1
