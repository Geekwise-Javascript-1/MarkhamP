app.controller('mainController', function($scope) {
    $scope.hello = 'Hello World!';

$scope.drag = true;


$scope.dragOn = function () {
  $scope.drag = true;
  console.log('Set drag to True');
};
$scope.dragOff = function () {
  $scope.drag = false;
  console.log('Set drag to False');
};

});
