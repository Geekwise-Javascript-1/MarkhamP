app.directive('tableButtons', function(){
    return {
        restrict: 'E',
        scope: {
            table: '='
        },
        templateUrl: 'app/directives/tableButtons.html'
    };
});
