import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user, loading}= useContext(AuthContext)
let location= useLocation()
if(loading){
    return <div><h1>loading...</h1></div>
}
if(user && user.uid){
    return children
}
return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;