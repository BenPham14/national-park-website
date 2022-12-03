const firebaseConfig = {
    apiKey: "AIzaSyAo2irLOOtz3Js5xQxdwNw134YBcyAkB20",
    authDomain: "feedback-dbc52.firebaseapp.com",
    projectId: "feedback-dbc52",
    databaseURL: "https://feedback-dbc52-default-rtdb.firebaseio.com/",
    storageBucket: "feedback-dbc52.appspot.com",
    messagingSenderId: "475587979598",
    appId: "1:475587979598:web:0ad51f59c29c130fef161f"
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
    var reason = document.getElementById("country").value;
    var comment = document.getElementById("subject").value;

    detailsRef.push().set({
        fname: fname,
        lname: lname,
        reason: reason,
        comment: comment
    });
}

