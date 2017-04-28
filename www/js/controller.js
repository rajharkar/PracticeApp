/*app.controller('firstCtrl', function($scope){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position = position;
      });
    });
  }
 
  $scope.position = 22;

});*/


app.controller('GeoCtrl', function($firebaseObject,$scope) {

       var firebaseRef = firebase.database().ref();
        firebaseRef.child('Testing1').set("Test");
        $scope.test = "Raj";

        $scope.leftButton = function(){
                  doSomething();
        }
  //var posOptions = {timeout: 10000, enableHighAccuracy: false};
  /*$cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position)*/ {
   /*   var lat  = position.coords.latitude
      var long = position.coords.longitude*/
    };
});

function doSomething()
{
  alert("Test");
}