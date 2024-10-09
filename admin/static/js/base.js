// Ideally, store Firebase config in environment variables and access it securely on the server side.
var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, // Use environment variables on the server side
  authDomain: "singup-aa8c7.firebaseapp.com",
  databaseURL: "https://singup-aa8c7-default-rtdb.firebaseio.com",
  projectId: "singup-aa8c7",
  storageBucket: "singup-aa8c7.appspot.com",
  messagingSenderId: "103136147192",
  appId: "1:103136147192:web:f7c90dc3c11fd7f8be6d0d",
  measurementId: "G-DCWHS5WQ7T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
  // Declare variables with let to ensure proper scope
  let full_name = document.getElementById('full_name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('pass').value;

  // Validate input fields
  if (!validate_email(email) || !validate_password(password)) {
    alert('Email or Password is wrong');
    return;
  }

  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      const user = auth.currentUser;

      // Add this user to Firebase Database
      const database_ref = database.ref();

      // Create User data, use a proper username if necessary
      const user_data = {
        full_name: full_name,
        username: email, // Use email as username for now, since no username input field exists
        last_login: Date.now()
      };

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data);

      // Done
      alert('User Created!!');
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      const error_message = error.message;
      alert(error_message);
    });
}

// Set up our login function
function login() {
  // Declare variables with let to ensure proper scope
  let email = document.getElementById('email').value;
  let password = document.getElementById('pass').value;

  // Validate input fields
  if (!validate_email(email) || !validate_password(password)) {
    alert('Email or Password is Wrong');
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      const user = auth.currentUser;

      // Add this user to Firebase Database
      const database_ref = database.ref();

      // Create User data
      const user_data = {
        last_login: Date.now()
      };

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data);

      // Done
      alert('User Logged In!!');
    })
    .catch(function(error) {
      const error_message = error.message;
      alert(error_message);
    });
}

// Validate email function (renamed from validate_username)
function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email); // Return true if valid, false if not
}

// Validate password function (fixed logic)
function validate_password(password) {
  // Check password length
  return password.length >= 6;
}

// Validate any field function
function validate_field(field) {
  return field != null && field.length > 0;
}
