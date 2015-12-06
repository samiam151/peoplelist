angular.module('app', [])

// FILTERS
// =======================

.filter('camelCase', function(){
  return function(input){
    var arr =[];
    arr.push(input.charAt(0).toUpperCase());
    for(var i = 1, j = input.length; i<j; i++){
          arr.push(input.charAt(i).toLowerCase());
    }
    return arr.join('');
  };
})

// DIRECTIVES
// =======================

.directive('peopleList', function(){
  return {
    restrict: 'E',
    templateUrl: 'peopleList.html'
  }
})

// CONTROLLERS
// =======================

.controller('ListCtrl', ['$scope', '$log', function($scope, $log){
  $scope.people = ["Jhanke", "Samir", "Zapp", "Keagan", "LaRon", "Aio", "Nasir"];
  
  $scope.addPerson = function(newPeeps){
    $scope.people.push(newPeeps);
    $scope.newPerson = '';
    $log.log(newPeeps);
  };
  
  $scope.removePerson = function(peep){
    var index = $scope.people.indexOf(peep);
    $scope.people.splice(index, 1);
  };
}])

;