"use client"
import React, { useContext } from 'react';
import { AuthContext } from '../authprovider/Authprovider';

const UseAuthContext = () => {

    const authContext=useContext(AuthContext)
    return authContext;
   
};

export default UseAuthContext;