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


firebase.auth().onAuthStateChanged(user=>{
    if(user){
        console.log(user.email, user.uid)
    }else{
        console.log('not login')
    }
})



let btn = document.getElementById('onRegister');
btn.addEventListener('click', register);

let signin_btn = document.getElementById('onSignin');
signin_btn.addEventListener('click', signin);


console.log('123')