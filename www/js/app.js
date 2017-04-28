// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','firebase'])

app.run(function($ionicPlatform) {

var config = {
     apiKey: "AIzaSyBy4L5orazlC7U6eK6qLDPT7ML-NcUPdEQ",
    authDomain: "angular-4325b.firebaseapp.com",
    databaseURL: "https://angular-4325b.firebaseio.com",
    projectId: "angular-4325b",
    storageBucket: "angular-4325b.appspot.com",
    messagingSenderId: "1085334081501"
  };
  firebase.initializeApp(config);

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
