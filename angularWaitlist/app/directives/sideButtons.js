app.directive('sideButtons', function(){
    return {
        restrict: 'E',
        scope: {
            table: '='
        },
        templateUrl: 'app/directives/sideButtons.html'
    };
});
