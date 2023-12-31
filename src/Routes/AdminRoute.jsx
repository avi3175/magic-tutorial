import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation()





    if(loading || isAdminLoading){
        return <div><p>LOADING......</p></div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;