function validateFields() {
  const emailValid = IsEmailValid();
  document.getElementById("recovery-password-button").dissable = !IsEmailValid;
  const passwordValid = IsPasswordValid();
  document.getElementById("login-button").disabled =
    !emailValid || !passwordValid;
}
function IsEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}
function IsPasswordValid() {
  const password = document.getElementById("password").value;
  if (!password) {
    return false;
  }
  return true;
}
function validateEmail(email) {
  return /\s+@\S+\.\S+/.test(email);
}

function login() {
  window.location.href = "index.html";
}

/*
<script src="https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.19.1/firebase-auth-compat.js"></script>
  <script>
    const firebaseConfig = {
      apiKey: "AIzaSyCyLAbZnbFFC2vV1eXTpUujhHKN-ywpsaI",
      authDomain: "mdinjetados-45068.firebaseapp.com",
      projectId: "mdinjetados-45068",
      storageBucket: "mdinjetados-45068.appspot.com",
      messagingSenderId: "598724960047",
      appId: "1:598724960047:web:50f8eabf66f11649e98bda",
      measurementId: "G-G724C8BFQP",
    };
    firebase.initializeApp(firebaseConfig);
    console.log("antes");
    firebase
      .auth()
      .signInWithEmailAndPassword("ovieiramarcio@gmail.com", "Q!w2e3r4t5")
      .then((response) => {
        console.log("sucess", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
    console.log("depois");
  </script>
*/
