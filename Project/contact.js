const firebaseConfig = {
    apiKey: "AIzaSyAgivY-skckD2LYyBxdIx5g8Ffynx0VJ-8",
    authDomain: "contact-6fdef.firebaseapp.com",
    projectId: "contact-6fdef",
    databaseURL: "https://contact-6fdef-default-rtdb.firebaseio.com/",
    storageBucket: "contact-6fdef.appspot.com",
    messagingSenderId: "208193748770",
    appId: "1:208193748770:web:8bb9d2cdd9b637fa47ef7b"
  };
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
});

function send() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("state").value;
    var subject = document.getElementById("subject").value;

    detailsRef.push().set({
        fname: fname,
        lname: lname,
        email: email,
        state: state,
        subject: subject
    });
}