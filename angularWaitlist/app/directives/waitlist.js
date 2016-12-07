app.directive('waitlist', function(){
    return {
        restrict: 'E',
        scope: {
            table: '='
        },
        templateUrl: 'app/directives/waitlist.html'
    };
});
