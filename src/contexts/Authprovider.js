import React,{createContext} from 'react';
import UserFirebase from '../hooks/UseFirebase';
// import UserFirebase from '../../hooks/UseFirebase';

 export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
    const allContext = UserFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;