import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCPu1kNqu-fQtNYehDbHMM0Wy73dUcwZeA",
  authDomain: "userauthforvoting.firebaseapp.com",
  projectId: "userauthforvoting",
  storageBucket: "userauthforvoting.appspot.com",
  messagingSenderId: "704569628557",
  appId: "1:704569628557:web:8cd2fd22ef5bf70bba8fc4",
  measurementId: "G-7W8G57G5KD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.languageCode = 'en'; 

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-auth");

googleLogin?.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in:", user);

      window.location.href = "../mainPage.html";
    })
    .catch((error) => {
      console.error(`Error during login: ${error.code} - ${error.message}`);
      alert("Authentication failed! Please try again.");
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`Welcome back, ${user.displayName}!`);
  } else {
    console.log("No user is signed in.");
  }
});
