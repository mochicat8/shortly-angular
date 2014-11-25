angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.reverse = false;
  $scope.getLinks = function(){
    Links.getLinks().then(function(data){
      $scope.data.links = data.data;
    });
  };
  $scope.getLinks();
});
