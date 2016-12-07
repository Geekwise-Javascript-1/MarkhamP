app.controller('dropdownCtrl',
  function ($scope, $http) {

    // When the user selects a Section from the DropDownList, the following variable will get set.
    $scope.selectedSection = null;
    // When the user selects a Table from the DropDownList, the following variable will get set.
    $scope.selectedTable = null;

    // When we first load our Controller, we'll call our API, which fetchs a list of all the Section and table records.
   var config = {
     headers: {'partner-token': 'Team1',
               'user-token': 'blablabla'}
    };


    $http.get('http://67.182.6.162/YBIYNI/GeekWise.dll/AllSection',config)
        .success(function (data) {
            console.log('AllSection data ' + JSON.stringify(data));
            $scope.listOfSections = data.section;
            if ($scope.listOfSections.length > 0) {
                // If we managed to load more than one Section record, then select the first record by default.
                // This line of code also prevents AngularJS from adding a "blank" <option> record in our drop down list
                // (to cater for the blank value it'd find in the "selectedSectionr" variable)
               $scope.selectedSection = $scope.listOfSections[0].SECTIONSEQ;

                // Load the list of Tables, and their People.
                // $scope.loadTables();
            }
        })
        .error(function (data, status, headers, config) {
            $scope.errorMessage = "Couldn't load the list of Sections, error # " + status;
        });

    $http.get('http://67.182.6.162/YBIYNI/GeekWise.dll/AllTable',config)
        .success(function (data) {
            console.log('AllTable data ' + JSON.stringify(data));
            $scope.listOfTables = data.tables;

        })
        .error(function (data, status, headers, config) {
            $scope.errorMessage = "Couldn't load the list of Tables, error # " + status;
        });

    $http.get('http://67.182.6.162/YBIYNI/GeekWise.dll/AllWaitlist',config)
        .success(function (data) {
            console.log('AllWaitlist data ' + JSON.stringify(data));
            $scope.listOfWaitlist = data.waitlist;

        })
        .error(function (data, status, headers, config) {
            $scope.errorMessage = "Couldn't load the Waitlist, error # " + status;
        });



    $http.get('http://67.182.6.162/YBIYNI/GeekWise.dll/AllWaitlist',config)
        .success(function (data) {
            console.log('AllReservtions data ' + JSON.stringify(data));
            $scope.listOfReservations = data.waitlist;

        })
        .error(function (data, status, headers, config) {
            $scope.errorMessage = "Couldn't load the Reservations, error # " + status;
        });



    $scope.saveTables = function () {
      console.log('Save tables clicked');
      //var tableArr = angular.element(".table");
      var tableArr = document.getElementsByClassName('table');
      console.log('tablearr ' + JSON.stringify(tableArr));
      for (var i = 0; i < tableArr.length; i++) {
        for (var t = 0; t < $scope.listOfTables.length; t++) {
           if ( $scope.listOfTables[t].ID == tableArr[i].id ) {
             console.log('Table from list of tables ' +  JSON.stringify($scope.listOfTables[t]));
              console.log('Table TOP ' +  $scope.listOfTables[t].POSTOP + ' LEFT ' +  $scope.listOfTables[t].POSLEFT + ' Moved to  TOP ' + tableArr[i].style.top + ' Moved to  LEFT ' + tableArr[i].style.left);



              // $scope.listOfTables[t].POSTOP =    tableArr[i].style.top;
              // $scope.listOfTables[t].POSLEFT =  tableArr[i].style.left;
          }
        }
        console.log('tableArr ' + i + ' id=' + tableArr[i].id);

      }


    };

});
