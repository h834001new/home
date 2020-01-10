
var app = angular.module('myapp', []);
app.controller('ctrl', function($scope, $http) {
  $http.get("https://newsapi.org/v1/articles?source=the-hindu&apiKey=07bbb84ccca741e2ac4b1f1a03c07642")
  .then(function(response) {
      $scope.records = response.data.articles;
 
      console.log(response.data.articles)
  });
});
