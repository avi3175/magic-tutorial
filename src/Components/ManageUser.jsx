import React from 'react';
import userStack from '../hooks/Userstack';
import { Helmet } from 'react-helmet-async';

const ManageUser = () => {
    const [cart] = userStack()
    return (
        <div>
            <Helmet><title>MAGIC SCHOOL || ALL USERS</title></Helmet>
            <h1 className='text-3xl font-bold'>TOTAL USERS:{cart.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>PASSWORD</th>
                            <th>MAKE ADMIN</th>
                            <th>MAKE INSTRUCTOR</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            cart.map((user,index)=><tr>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.password}</td>
                                <td>MAKE ME ADMIN</td>
                                <td>MAKE ME INSTRUCTOR</td>
                            </tr>)
                        }
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;