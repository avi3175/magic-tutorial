import React from 'react';
import userStack from '../hooks/Userstack';
import { Helmet } from 'react-helmet-async';

const MySelectedClass = () => {
    const [cart] = userStack()
    const total = cart.reduce((sum,item)=>item.price +sum ,0)

    console.log(cart)
    return (
        <div>
            <Helmet><title>MAGIC SCHOOL || MY SELECTED CLASS</title></Helmet>
            <div>
                <p>TOTAL SELECTED CLASS :{cart.length}</p>
                <p>TOTAL PRICE:{total}</p>
                <button className='btn btn-warning btn-sm'>PAY</button>
            </div>
            <div className="overflow-x-auto mt-32">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>INSTRUCTOR</th>
                            <th>SEATS</th>
                            <th>EMAIL</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.price}</td>
                                <td>{user.instructor}</td>
                                <td>{user.availableSeats}</td>
                                <td>{user.email}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;