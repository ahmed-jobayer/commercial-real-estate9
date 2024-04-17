import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebaase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        
      return  signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () =>{
       return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('userin auth change', currentUser)
            setUser(currentUser)
        } )
        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logOut,
        loginUser,
        googleLogin,
        githubLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;