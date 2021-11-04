import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

//context create 
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const authData = useFirebase();
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
