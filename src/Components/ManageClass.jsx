import React from 'react';
import allClass from '../hooks/classes';
import useAuth from '../hooks/useAuth';

const ManageClass = () => {
    const [school] = allClass()
    const { user } = useAuth()

    const makeApprove = (user) => {
        fetch(`https://magic-server.vercel.app/class/approve/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // refetch()
                    alert('MAKE APPROVED DONE')
                }
            })
    }



    const makeDeny = (user) => {
        fetch(`https://magic-server.vercel.app/class/denied/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // refetch()
                    alert('MAKE DENIED DONE')
                }
            })
    }






















    return (
        <div>
            <p>MANAGE CLASS WITH THE ADMIN</p>

            <div className="overflow-x-auto mt-32">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>SEAT</th>
                            <th>INSTRUCTOR</th>
                            <th>STATUS</th>
                            <th>DENY</th>
                            <th>FEEDBACK</th>
                            <th>APPROVE</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            school.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.price}</td>
                                <td>{user.seat}</td>
                                <td>{user.instructor}</td>
                                <td>{user.status}</td>
                                <td><button onClick={() => makeDeny(user)} className='bg-rose-900 p-2 text-white'>DENY</button></td>
                                <td><button onClick={() => makeInstructor(user)} className='bg-blue-900 p-2 text-white'>FEEDBACK</button></td>
                                <td><button onClick={() => makeApprove(user)} className='bg-blue-900 p-2 text-white'>APPROVE</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;