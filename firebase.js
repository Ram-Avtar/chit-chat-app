import firebase from "react-native-firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCzXloVAQJlOrH2Ks6XVC2H_l28mQCSnsM",
  authDomain: "chitchat-rn-app.firebaseapp.com",
  projectId: "chitchat-rn-app",
  databaseURL:"https://chitchat-rn-app.firebaseio.com",
  storageBucket: "chitchat-rn-app.appspot.com",
  messagingSenderId: "835713251818",
  appId: "1:835713251818:web:c21ed67c856dda26151a93"
};

let app;
console.log('firebase file',firebase.apps.length)
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
else {
  app = firebase.app();
}

console.log('app deatils ', app);
const db = app.firestore();
const auth = firebase.auth();

console.log('database details', db);
console.log('authentication details', auth);




export { db, auth };