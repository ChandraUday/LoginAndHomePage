import firebase from "firebase" 

const firebaseConfig = {
    apiKey: "AIzaSyArB6e5l-C3b0oTNPcMf9yhfH_xcA2dqgU",
    authDomain: "loginandhomepage.firebaseapp.com",
    projectId: "loginandhomepage",
    storageBucket: "loginandhomepage.appspot.com",
    messagingSenderId: "865218714876",
    appId: "1:865218714876:web:aa05b7d954650e3cd20b79"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
 
  export {auth}