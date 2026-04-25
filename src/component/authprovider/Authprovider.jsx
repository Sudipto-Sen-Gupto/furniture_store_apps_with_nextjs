"use client"

import { auth } from '@/auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext()
const Authprovider = ({children}) => {


  const [user,setUser]=useState(null)   
 const [loader,setLoader]=useState(true)

    const googleProvider=new  GoogleAuthProvider

    const signUpWithGoogle=()=>{
                setLoader(true)
              return signInWithPopup(auth,googleProvider)
    }

    const signUpWithUser=(email,pass)=>{
               setLoader(true)
               return createUserWithEmailAndPassword(auth,email,pass)
    }

    const signInWithUser=(email,pass)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logOut=()=>{
        setLoader(true)
         return signOut(auth)
    } 

    useEffect(()=>{
            const unSubscriber=onAuthStateChanged(auth,(currentUser)=>{
                   setUser(currentUser)
                   setLoader(false)
            })

            return ()=>{
                unSubscriber()
            }
    },[])

    const userInfo={
       signUpWithGoogle,signUpWithUser,signInWithUser,logOut,loader,user
    }
    return (
      <AuthContext.Provider value={userInfo}>
         {children}
      </AuthContext.Provider>
    );
};

export default Authprovider;