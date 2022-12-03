const form = document.getElementById('paymentForm');
const fullName = form.elements["fullName"]
const email = form.elements["email"]
const address = form.elements["shipAddress"]
const city = form.elements["shipCity"]
const state = form.elements["shipState"]
const zip = form.elements["shipZip"]
 
form.addEventListener('submit',(e) => {
    e.preventDefault();
 
    localStorage.setItem('full-name', fullName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('address', address.value + ", " + city.value + ", " + state.value + " " + zip.value)
    window.location.href = "Payment confirmation.html";
})

