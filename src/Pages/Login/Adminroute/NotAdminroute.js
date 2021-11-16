import { CircularProgress } from '@mui/material';
import React from 'react';
import {
  Route, Redirect
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const NotAdminroute = ({ children, ...rest }) => {
    const {user, isLoading, checkAdmin} = useAuth();
    if(isLoading){
        return <CircularProgress/>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default NotAdminroute;