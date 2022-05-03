// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBGmpIa6xsN23EI3IOEz8igcEAixw-oBEs",
  authDomain: "mycontact-a2d00.firebaseapp.com",
  databaseURL: "https://mycontact-a2d00-default-rtdb.firebaseio.com",
  projectId: "mycontact-a2d00",
  storageBucket: "mycontact-a2d00.appspot.com",
  messagingSenderId: "553048563683",
  appId: "1:553048563683:web:aa7d1855d223720bdf8ad6",
  measurementId: "G-GH5GQ6WBDP"
  };
  
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref("messages");
  
  // Listen for form submit
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var name = getInputVal("name");
    var lastname = getInputVal("lastname");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var message = getInputVal("message");
  
    // Save message
    saveMessage(name, lastname, email, phone, message);
  
    // Show alert
    document.querySelector(".alert").style.display = "block";
  
    // Hide alert after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Clear form
    document.getElementById("contactForm").reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, lastname, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
      message: message,
    });
  }
  