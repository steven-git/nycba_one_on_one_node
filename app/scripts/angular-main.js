'use strict';

var app = angular.module("nycbaApp", ["ngRoute", "firebase"]);

app.controller('SignUpController', function($scope, $firebaseArray){
  $scope.user = {
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    nameOnCard: '',
    cardType: '',
    cardNumber: '',
    expiration: '',
    year: '',
    cardSecurityCode: ''

  };

//CREATE A FIREBASE REFERENCE
var databaseData = new Firebase("https://basketballoneonone.firebaseio.com/");

// GET PLAYER AS AN ARRAY
$scope.player = $firebaseArray(databaseData);

console.log($scope.player);



$scope.addPlayer = function () {
 alert($scope.user.firstName);
  $scope.player.$add({
    First_Name: $scope.user.firstName,
    Last_Name: $scope.user.lastName,
    Address_One: $scope.user.addressOne,
    Address_Two: $scope.user.addressTwo,
    City: $scope.user.city,
    State: $scope.user.state,
    Zip: $scope.user.zip,
    Phone: $scope.user.phone,
    Email: $scope.user.email,
    NameOnCard: $scope.user.nameOnCard,
    CardType: $scope.user.cardType,
    CardNumber: $scope.user.cardNumber,
    Expiration: $scope.user.expiration,
    Year: $scope.user.year,
    CardSecurityCode: $scope.user.cardSecurityCode

  });

}


});



app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',
    {
      templateUrl: '/views/partials/main.html',
      controller: 'MainCtrl'
    })
    .when('/bracket',
    {
      templateUrl: '/views/partials/bracket.html',
      controller: 'BracketCtrl'     
    })
    .when('/bracket1',
    {
      templateUrl: '/views/partials/bracket1.html',
      controller: 'BracketCtrl'     
    })
    .when('/players',
    {
      templateUrl: '/views/partials/players.html',
      controller: 'PlayerCtrl'     
    })
    .when('/champions',
    {
      templateUrl: '/views/partials/champions.html',
      controller: 'ChampionCtrl'     
    })
    .when('/rules',
    {
      templateUrl: '/views/partials/rules.html',
      controller: 'ChampionCtrl'     
    })  
    .when('/signup',
    {
      templateUrl: '/views/partials/signup.html',
      controller: 'SignUpController'     
    })
    .when('/photos',
    {
      templateUrl: '/views/partials/photos.html',
      controller: 'SignupCtrl'     
    })
    .when('/steveng',
    {
      templateUrl: '/views/partials/steveng.html',
      controller: 'SignupCtrl'     
    })
    .when('/keving',
    {
      templateUrl: '/views/partials/keving.html',
      controller: 'SignupCtrl'     
    })
    .when('/antonios',
    {
      templateUrl: '/views/partials/antonios.html',
      controller: 'SignupCtrl'     
    })
    .when('/antoniog',
    {
      templateUrl: '/views/partials/antoniog.html',
      controller: 'SignupCtrl'     
    })
    .when('/yonathanw',
    {
      templateUrl: '/views/partials/yonathanw.html',
      controller: 'SignupCtrl'     
    })
    .when('/chrisc',
    {
      templateUrl: '/views/partials/chrisc.html',
      controller: 'SignupCtrl'     
    })
    .when('/kevinb',
    {
      templateUrl: '/views/partials/kevinb.html',
      controller: 'SignupCtrl'     
    })
    .when('/joshf',
    {
      templateUrl: '/views/partials/joshf.html',
      controller: 'SignupCtrl'     
    })        
    .when('/player',
    {
      templateUrl: '/views/partials/placeholder.html',
      controller: 'SignupCtrl'     
    })        

    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

});

