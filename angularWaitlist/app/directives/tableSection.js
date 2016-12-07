app.directive('tableSection', function(){
    return {
        restrict: 'E',
        scope: {
            table: '='
        },
        templateUrl: 'app/directives/tableSection.html'
    };
});
