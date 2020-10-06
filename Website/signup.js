  // // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyBpTCQgjfiLUHJOcj46oSc9yKhL1ReprbA",
  //   authDomain: "collegehighschoolappdemo.firebaseapp.com",
  //   databaseURL: "https://collegehighschoolappdemo.firebaseio.com",
  //   projectId: "collegehighschoolappdemo",
  //   storageBucket: "collegehighschoolappdemo.appspot.com",
  //   messagingSenderId: "41619628396",
  //   appId: "1:41619628396:web:63219fa9fe3c6891475349",
  //   measurementId: "G-8D6X45S14T"
  // };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function signup() {

    var email = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    window.alert ("Signed Up");
  }