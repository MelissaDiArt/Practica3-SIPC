(function() {

  var config = {
    apiKey: "AIzaSyCRCXNW2inMPZ461wjOgKwYflBLglr0PEA",
    authDomain: "sipc-b0b4e.firebaseapp.com",
    databaseURL: "https://sipc-b0b4e.firebaseio.com",
    storageBucket: "sipc-b0b4e.appspot.com",
    messagingSenderId: "27590491920"
  };
  firebase.initializeApp(config);

    angular
        .module('myApp', ['firebase'])
        .controller('MyCtrl', MyCtrl);

        function MyCtrl($scope,$firebaseObject) {
            console.log("frgf");
            $scope.login= function(){

                  const email = $scope.object.lmail;
                  const pass = $scope.object.passs;

                  console.log(email);
                  console.log(pass);

                  const auth = firebase.auth();

                  if(document.getElementById('mypass').innerHTML == "" && document.getElementById('eemail').innerHTML == "") {
                      auth.signInWithEmailAndPassword(email,pass)
                      .then(e => {
                          console.log(e.message);
                          $scope.object.lmail = "";
                          $scope.object.passs = "";
                      })
                      .catch(er => {
                              if(er.message == "There is no user record corresponding to this identifier. The user may have been deleted."){
                                  document.getElementById('eemail').innerHTML = er.message ;
                              }else if(er.message == "The password is invalid or the user does not have a password."){
                                  document.getElementById('mypass').innerHTML = er.message;
                              }
                          });
                  }
            };

            $scope.reg = function () {
                const email = $scope.object.email;
                const pass = $scope.object.pass;

                console.log(email);
                console.log(pass);

                const auth = firebase.auth();

                if(document.getElementById('mypass').innerHTML == "" && document.getElementById('email').innerHTML == "") {
                    auth.createUserWithEmailAndPassword(email,pass)
                    .then(e => {
                        console.log(e.message);
                        $scope.object.email = "";
                        $scope.object.pass = "";
                        document.getElementById('registro').classList.remove('active');
                        document.getElementById('chat').classList.add('active');
                        document.getElementById('nregistro').classList.remove('active');
                        document.getElementById('nchat').classList.add('active');
                    })
                    .catch(er => {
                            document.getElementById('mypass').innerHTML = er.message;
                        });
                }
            };

            $scope.logout = function () {
                firebase.auth().signOut()
                .then(e => {
                    console.log(e);
                });
            };

            firebase.auth().onAuthStateChanged(firebaseUser => {
                if(firebaseUser) {
                    console.log(firebaseUser);
                    var lg = firebaseUser.email.indexOf('@');
                    var name = firebaseUser.email.slice(0,lg);
                    $scope.user = name;
                    document.getElementById('blogin').classList.add('hide');
                    document.getElementById('blogout').classList.remove('hide');
                    document.getElementById('mmail').classList.add('hide');
                    document.getElementById('ppass').classList.add('hide');
                    document.getElementById('name').classList.add('hide');
                    document.getElementById('firstname').classList.add('hide');
                    document.getElementById('mail').classList.add('hide');
                    document.getElementById('pass').classList.add('hide');
                    document.getElementById('lname').classList.add('hide');
                    document.getElementById('lfirstname').classList.add('hide');
                    document.getElementById('lmail').classList.add('hide');
                    document.getElementById('lpass').classList.add('hide');
                    document.getElementById('ename').classList.add('hide');
                    document.getElementById('efname').classList.add('hide');
                    document.getElementById('email').classList.add('hide');
                    document.getElementById('mipass').classList.add('hide');
                    document.getElementById('bregin').classList.add('hide');
                    document.getElementById('bregout').classList.remove('hide');
                    document.getElementById('mschat').classList.add('hide');
                    document.getElementById('chatbox').classList.remove('hide');
                    $scope.loadms();
                }else{
                    document.getElementById('blogout').classList.add('hide');
                    document.getElementById('blogin').classList.remove('hide');
                    document.getElementById('mmail').classList.remove('hide');
                    document.getElementById('ppass').classList.remove('hide');
                    document.getElementById('name').classList.remove('hide');
                    document.getElementById('firstname').classList.remove('hide');
                    document.getElementById('mail').classList.remove('hide');
                    document.getElementById('pass').classList.remove('hide');
                    document.getElementById('lname').classList.remove('hide');
                    document.getElementById('lfirstname').classList.remove('hide');
                    document.getElementById('lmail').classList.remove('hide');
                    document.getElementById('lpass').classList.remove('hide');
                    document.getElementById('ename').classList.remove('hide');
                    document.getElementById('efname').classList.remove('hide');
                    document.getElementById('email').classList.remove('hide');
                    document.getElementById('mipass').classList.remove('hide');
                    document.getElementById('bregin').classList.remove('hide');
                    document.getElementById('bregout').classList.add('hide');
                    document.getElementById('mschat').classList.remove('hide');
                    document.getElementById('chatbox').classList.add('hide');
                }
            });

            $scope.sendms = function () {
                var today = new Date().toJSON().slice(0,19);
                console.log(today);
                var text = document.getElementById('mensaje').value;
                console.log(text);
                console.log($scope.user);
                firebase.database().ref('messages/' + today).set({
                    nombre: $scope.user,
                    mensaje: text
                }).then(document.getElementById('mensaje').value = "");
            };

            $scope.loadms = function() {
                var messagesRef = firebase.database().ref().child('messages');
                $scope.mss = $firebaseObject(messagesRef);
            };

            const rootRef = firebase.database().ref().child('angular');
            const ref = rootRef.child('object');


        };
}());
