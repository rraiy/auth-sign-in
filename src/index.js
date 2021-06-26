import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from'./firebase.config';
// import ui from './firebase.config';
// import firebase_cc as firebase from './firebase.config';


firebase.initializeApp(firebaseConfig);

// register event
const register = () =>{
    let user_mail = document.getElementById('username').value
    let user_pw = document.getElementById('password').value

    firebase.auth().createUserWithEmailAndPassword(user_mail, user_pw)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user)
    })
    .catch(err => console.log(err.message))
}

// sign in event 
const signin  = () => {
    const email = document.getElementById('signin_mail').value;
    const password = document.getElementById('signin_pw').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err.message))
}

// track and get user state
firebase.auth().onAuthStateChanged(user=>{
    if(user){
        console.log(user.email, user.uid)
    }else{
        console.log('not login')
    }
})

// sign out 
const signOut = () => {
    firebase.auth().signOut().then(()=>{
        window.location.reload();
    }).catch(err => console.log(err))
}

// sign in with google
const signinGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(res => {
        const credential = res.credential;
        const token = credential.accessToken;
        const user = res.user;

    })
    .catch(err=>{
        console.log(err.message, err.email, err.credential)
    })
}








let btn = document.getElementById('onRegister');
btn.addEventListener('click', register);

let signin_btn = document.getElementById('onSignin');
signin_btn.addEventListener('click', signin);

let signout_btn = document.getElementById('onSign_out');
signout_btn.addEventListener('click', signOut);

let google_btn = document.getElementById('google_sign');
google_btn.addEventListener('click', signinGoogle);

console.log('123')