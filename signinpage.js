// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCcPglX2Fsh34SYyW2LMb9c9VzoRPOcELM",
    authDomain: "gaosaathi.firebaseapp.com",
    projectId: "gaosaathi",
    storageBucket: "gaosaathi.firebasestorage.app",
    messagingSenderId: "551560417721",
    appId: "1:551560417721:web:410d11ae7b88dd3260e668",
    measurementId: "G-ZG32EYHZNP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  //submit
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function (event){
    event.preventDefault()

//inputs
  const email = document.getElementById('Email Address').value;
  const password = document.getElementById('Create Password').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account....")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  })