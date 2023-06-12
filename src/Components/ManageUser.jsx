import { useQuery } from '@tanstack/react-query'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ManageUser = () => {

const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data
    })
 console.log(users)


    const makeAdmin = (user) => {
        fetch(`https://magic-server.vercel.app/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // refetch()
                    alert('MAKE ADMIN DONE')
                }
            })
    }



    const makeInstructor = (user) => {
            fetch(`https://magic-server.vercel.app/users/instructor/${user._id}`,{
                method:"PATCH"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount){
                    alert('MAKE INSTRUCTOR DONE')
                }
            })
    }








    return (
        <div>
            <Helmet><title>MAGIC SCHOOL || ALL USERS</title></Helmet>
            <h1 className='text-3xl font-bold'>TOTAL USERS:{users.length}</h1>

            <div className="overflow-x-auto mt-32">
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
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.password}</td>
                                <td><button onClick={() => makeAdmin(user)} className='bg-rose-900 p-2 text-white'>MAKE ME ADMIN</button></td>
                                <td><button onClick={()=>makeInstructor(user)} className='bg-blue-900 p-2 text-white'>MAKE ME INSTRUCTOR</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;