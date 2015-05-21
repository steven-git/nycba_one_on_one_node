'use strict';

var app = angular.module("nycbaApp", ["ngRoute", "firebase"]);

app.controller('SignUpController', function($scope, $firebaseArray, $location){
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

//console.log($scope.player);



$scope.addPlayer = function () {
 //alert($scope.user.firstName);
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

  $location.url('/emailconfirmation');

}


});



app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',
    {
      templateUrl: '/views/partials/main.html',
      controller: 'SignUpController'
    })
    .when('/bracket',
    {
      templateUrl: '/views/partials/bracket.html',
      controller: 'SignUpController'     
    })
    .when('/bracket1',
    {
      templateUrl: '/views/partials/bracket1.html',
      controller: 'SignUpController'     
    })
    .when('/players',
    {
      templateUrl: '/views/partials/players.html',
      controller: 'SignUpController'     
    })
    .when('/champions',
    {
      templateUrl: '/views/partials/champions.html',
      controller: 'SignUpController'     
    })
    .when('/rules',
    {
      templateUrl: '/views/partials/rules.html',
      controller: 'SignUpController'     
    })  
    .when('/signup',
    {
      templateUrl: '/views/partials/signup.html',
      controller: 'SignUpController'     
    })
    .when('/emailconfirmation',
    {
      templateUrl: '/views/partials/email.html',
      controller: 'SignUpController'     
    })
    .when('/photos',
    {
      templateUrl: '/views/partials/photos.html',
      controller: 'SignUpController'     
    })
    .when('/steveng',
    {
      templateUrl: '/views/partials/steveng.html',
      controller: 'SignUpController'     
    })
    .when('/keving',
    {
      templateUrl: '/views/partials/keving.html',
      controller: 'SignUpController'     
    })
    .when('/antonios',
    {
      templateUrl: '/views/partials/antonios.html',
      controller: 'SignUpController'     
    })
    .when('/antoniog',
    {
      templateUrl: '/views/partials/antoniog.html',
      controller: 'SignUpController'     
    })
    .when('/yonathanw',
    {
      templateUrl: '/views/partials/yonathanw.html',
      controller: 'SignUpController'     
    })
    .when('/chrisc',
    {
      templateUrl: '/views/partials/chrisc.html',
      controller: 'SignUpController'     
    })
    .when('/kevinb',
    {
      templateUrl: '/views/partials/kevinb.html',
      controller: 'SignUpController'     
    })
    .when('/joshf',
    {
      templateUrl: '/views/partials/joshf.html',
      controller: 'SignUpController'     
    })        
    .when('/player',
    {
      templateUrl: '/views/partials/placeholder.html',
      controller: 'SignUpController'     
    })        

    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

});

