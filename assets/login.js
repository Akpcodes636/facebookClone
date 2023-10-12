// implementing a display form;
const registerBtnEl = document.querySelector(".hero-green-btn");
const formBox = document.querySelector(".hero-form-box-2");
const registerBtn = document.querySelector(".register");
const overlay = document.querySelector(".overlay");
const closeForm = function () {
  formBox.classList.remove("hidden");
  // overlay.classList.remove("hidden");
};
const openForm = function () {
  formBox.classList.add("hidden");
  // overlay.classList.add("hidden");
};
registerBtn.addEventListener("click", openForm);
registerBtnEl.addEventListener("click", closeForm);
// registerBtnEl.addEventListener('click', function(){
//     console.log("This works just fine!");
//     formBox.style.display="block";
// });
// registerBtn.addEventListener("click", function(){
//     formBox.style.display="none"
// });

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjXNzbuSUIcenARN_PZtiTRawLYeF-XIo",
  authDomain: "facebook-login-ec417.firebaseapp.com",
  databaseURL: "https://facebook-login-ec417-default-rtdb.firebaseio.com",
  projectId: "facebook-login-ec417",
  storageBucket: "facebook-login-ec417.appspot.com",
  messagingSenderId: "696047899699",
  appId: "1:696047899699:web:9dedcc957c892ea136bf46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

btnRegister.addEventListener("click", (e) => {
  const email = document.getElementById("regName").value;
  const password = document.getElementById("regPass").value;
  const name = document.getElementById("name").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        username: username,
        email: email,
      });
      alert("user created!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });
});

//   login function
const email = document.getElementById("regName");
const password = document.getElementById("regPass");
const name = document.getElementById("name");
btn.addEventListener("click", (e) => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: dt,
      });
      window.location.assign("Home.html");
      alert("user signed in!");
      // ...
      email.value = "kjhgfjhg";
      password.value = "";
      // Clear the input fields
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
