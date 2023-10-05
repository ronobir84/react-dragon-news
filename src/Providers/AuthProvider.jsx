/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebace-config";

export const AuthConText = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth , email, password)
    }
    const sigIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }
    },[])
    const authInfo = {
        user,
        createUser,
        logOut,
        sigIn
    }
    return (
        <AuthConText.Provider value={authInfo}>
            {children}
        </AuthConText.Provider>
    );
};

export default AuthProvider;