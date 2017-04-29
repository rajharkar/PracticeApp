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


      //get Elemets 
      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const btnLogin = document.getElementById('btnLogin');
      const btnSignUp = document.getElementById('btnSignUp');
     const btnLogout = document.getElementById('btnLogout');

    
       btnLogin.addEventListener('click' , e => {

       const email = txtEmail.value;
       const pass = txtPassword.value;
       const auth = firebase.auth();
       const promise= auth.signInWithEmailAndPassword(email,pass);
       promise.catch(e=>console.log(e.message));
       });


      btnSignUp.addEventListener('click' , e => {

       const email = txtEmail.value;
       const pass = txtPassword.value;
       const auth = firebase.auth();
       const promise = auth.createUserWithEmailAndPassword(email,pass);
       promise.catch(e=>console.log(e.message));
       });



      btnLogin.addEventListener('click' , e => {

         firebase.auth().signOut();
       });

      firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser)
        {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
      }
        else 
        {
         console.log("Not logged in");   
           btnLogout.classList.remove('add');
        }
      });

  
});

function doSomething()
{
  alert("Test");
}