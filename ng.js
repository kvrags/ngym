// build the router
var rootApp = angular.module('rootApp', ['ngRoute']);

rootApp.run(function($rootScope) {
    $rootScope.UserName = 'Test User';
});

//rootApp.value('UserName', "Test User");
//rootApp.value('eMail', "testUser@test.com");


rootApp.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'index.html',
        controller: 'ctrlHome'
    })

   .when('/home', {
        templateUrl: 'home.html',
        controller: 'ctrlHome'
   })
            
    .when('/about', {
        templateUrl: 'about.html',
        controller: 'ctrlAbout'
    })

    .when('/assesment', {
        templateUrl: 'assesment.html',
        controller: 'ctrlAssesment'
    })

    .when('/retrieveUser', {
        templateUrl: 'retrieveuserdetails.html',
        controller: 'ctrlRetrieveUser'
    })

    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ctrlContact'
    })
/*    .when('/logon', {
        templateUrl: 'logon.html',
        controller: 'ctrlLogon'
    })
*/
    .when('/squares', {
        templateUrl: 'squares.html',
        controller: 'ctrlSquares'
    })


    .otherwise({ redirectTo: '/index.html' });
});

//build controllers for every route
/*
rootApp.controller('ctrlLogon', ['$scope', '$window','myVars', function ($scope, $window, myVars) {
    console.log("Inside ng.js :: in ctrlLogon Controller");
    $scope.status = "Please fill above details.";



    $scope.logon = function (model) {
        console.log("Inside ng.js :: Calling Logon () in ctrlLogon Controller");
        $scope.status = "Logon details submitted.";
        //alert('Submitted\n' + JSON.stringify(model));

        //store user name,e-Mail and time of logon details locally.
        myVars.usrName = model.name;
        myVars.email = model.email

        //var db = $window.indexedDB;
        //var req = db.open("myApp", "Ver:1.0.0.1");



        $window.location.href = './home.html';
    };
    $scope.reset = function () {
        $scope.model = {};
    }
}]);
*/

/*
rootApp.controller('ctrlRegister', function ($scope) {
    
    console.log("Inside ng.js :: in ctrlRegister Controller");
    $scope.status = "Please fill above details.";

    $scope.Register = function (model) {
        console.log("Inside ng.js :: Calling Register () in ctrlRegister Controller");
        $scope.status = "Registration submitted.";
        alert('Submitted\n' + JSON.stringify(model));
    };
});
*/

//rootApp.controller('ctrlSquares', ['$scope', '$rootScope'], function($scope, $rootScope) {
//rootApp.controller('ctrlSquares', function ($scope) {

rootApp.controller('ctrlSquares', [
        '$scope',
        function ($scope) {
            $scope.AppData = InitAppData();
            $scope.taskLevel = SelectSquaresTaskLevel($scope.AppData.Levels[0]); //set g_taskLevel ...use a switch in the UI to set a Task Difficulty Level
            $scope.row_clrs = $scope.taskLevel.Table["row_clr"];
            
            $scope.setDifficultyLevel = function (item) {
                //$scope.taskLevel = item;
            }
            $scope.Draw = function () {
                $scope.array_Table = InitArrayObject($scope.taskLevel); //this sets an array object with radominised 0s and 1 for the given task difficulty level
                //$route.reload();
            }


        }
]);

/*
    rootApp.controller('ctrlSquares', ['$scope', '$route', function ($scope, $route) {
   
    $scope.AppData = InitAppData();
    $scope.taskLevel = SelectSquaresTaskLevel($scope.AppData.Levels[0]); //set g_taskLevel ...use a switch in the UI to set a Task Difficulty Level
    $scope.row_clrs = $scope.taskLevel.Table["row_clr"]; 
    //$scope.taskLevel = SelectSquaresTaskLevel($scope.AppData.Levels[0]); //set g_taskLevel
    //$scope.row_clr = $scope.taskLevel.Table.row_clr;
    //$scope.array_Table = InitArrayObject($scope.taskLevel); //this sets an array object with radominised 0s and 1 for the given task difficulty level
   // $scope.array_Table = InitArrayObject_v1($scope.taskLevel); //this sets an array object with radominised 0s and 1 for the given task difficulty level
    //DrawSquares();
    $scope.Draw = function () {
   
        //$scope.AppData = InitAppData(); //called already at the var initilisation
        $scope.array_Table = InitArrayObject($scope.taskLevel); //this sets an array object with radominised 0s and 1 for the given task difficulty level
        //DrawSquares();
        // $scope.reloadPage = function () { $window.location.reload(); }
        //$route.reload();
        $window.location.reload();
       
    }
    $scope.message = 'Hello from NS.JS script file in ctrlSquares MAIN Task Controller';
    $scope.names = [
            { Name: 'Jani', Country: 'Norway' },
            { Name: 'Hege', Country: 'Sweden' },
            { Name: 'Kai', Country: 'Denmark' }
    ];
    $scope.rows11 = [
        { col: [1, 2, 3, 4] },
        { col: [5, 6, 7] },
        { col: [9, 10, 11, 12] }
    ];
    $scope.temp = $scope.taskLevel;
   // $scope.debugMsg = debugMsg;
    
}]);
*/
rootApp.controller('ctrlHome', function ($scope) {
    $scope.message = 'Hello from HomeController';
});

rootApp.controller('ctrlAbout', function ($scope) {
    $scope.message = 'Hello from AboutController';
});

//rootApp.controller('ctrlAssesment',['myVars', function ($scope, myVars) {
//rootApp.controller('ctrlAssesment', function ($scope) {
rootApp.controller('ctrlAssesment',['$scope','$rootScope', function ($scope ,$rootScope) {
    $scope.message = 'Hello World from Assesment Controller';

    console.log("Inside ng.js :: In ctrlAssesment Controller");
    $scope.status = "Please fill above details.";
       
    $scope.Register = function (model) {
        console.log("Inside ng.js :: Calling Register () in ctrlAssesment Controller");
        $scope.status = "Registration for Assessment submitted.";
        alert('Submitted\n' + JSON.stringify(model));

        $rootScope.UserName = model.name;
        alert('RootScope var name is '+ $rootScope.UserName);

        //Register the user details here


        //if successfull registration

    };
}]);


rootApp.controller('ctrlRetrieveUser', function ($scope) {
    console.log("Inside ng.js :: In ctrlRetrieveUser Controller");

    $scope.Retrieve = function (model) {
        console.log("Inside ng.js :: Calling Register () in ctrlAssesment Controller");
        $scope.status = "fetching user deatils...please wait";
        //alert('Submitted\n' + JSON.stringify(model));
    };
});

rootApp.controller('ctrlContact', function ($scope) {
    $scope.message = 'Hello from Contact Controller';
});


//remove later...was initially planned to be called when onClick from page
/*
function Draw() {
    console.log("nsJS : Inside Draw()");
    g_AppData = InitAppData();
    selectSquaresTaskLevel(g_AppData.Levels[0]);
    InitArrayObject(); //now g_arrayTable is initialised with required 0s and 1s

    //var cntrlScope = angular.element('ctrlSquares', $rootscope);
    //cntrlScope.arrayTable = g_array_Table;

}
*/