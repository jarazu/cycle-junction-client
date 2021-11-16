import { useEffect, useState } from "react";
import InitializeFireBase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile,getIdToken } from "firebase/auth";
import { Redirect } from "react-router";

// initialize firebase
InitializeFireBase();

const UserFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [checkAdmin, setCheckAdmin] = useState(false);
    const [token, setToken] = useState('');
    const [authError, setAuthError] = useState('');
    // const [authError, setAuthError] = useState('');

    
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    // register user ******************************
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            const newUser = {email, displayName: name}
            setUser(newUser);
            // save user to database
            saveuser(email, name, "post");
            updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                // Profile updated!
                // ...
                }).catch((error) => {
                // An error occurred
                // ...
            });
            history.replace('/');
            setAuthError('');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthError(error.message);
            // ..
        })
        .finally(() => setIsLoading(false));
    }

    // save user after registration ***************************
    const saveuser = (email, name, posttype) => {
        const user = {email, displayName: name};
        fetch('https://peaceful-temple-93209.herokuapp.com/users', {
            method: posttype,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    // login user by email pass************************************
    const loginUserByEmailPass = (email, password, location, history) =>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const destination = location?.state?.from || '/'
        history.replace(destination);
        const user = userCredential.user;
        setAuthError('');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
}

    // log out ************************************
    const logOut = (history) => {
        setIsLoading(true);
        signOut(auth).then(() => {
            history.push("/");
        }).catch((error) => {
        // An error happened.
        })
        .finally(() => setIsLoading(false));
    }

    // observe user state *********************************
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            getIdToken(user)
            .then(token => {
                setToken(token)
            })
        } else {
            setUser({})
        }
        setIsLoading(false);
        });

        return unsubscribed;
    },[]);

    // check user is admin role *******************************************
    useEffect(() =>{
        fetch(`https://peaceful-temple-93209.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setCheckAdmin(data.admin))
    },[user.email]);

    return{
        user,
        registerUser,
        logOut,
        loginUserByEmailPass,
        isLoading,
        checkAdmin,
        token,
        authError
    }
}

export default UserFirebase;
