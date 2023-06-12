import React from 'react';
import userStack from '../hooks/Userstack';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MySelectedClass = () => {
    const [cart,refetch] = userStack()
    const total = cart.reduce((sum,item)=>item.price +sum ,0)


    const handleDelete = item =>{
            fetch(`https://magic-server.vercel.app/cart/${item._id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    refetch()
                    alert('DELETED')
                }
            })
    }

    console.log(cart)
    return (
        <div>
            <Helmet><title>MAGIC SCHOOL || MY SELECTED CLASS</title></Helmet>
            <div>
                <p className='text-white font-bold text-md'>TOTAL SELECTED CLASS :{cart.length}</p>
                <p className='text-white font-bold text-md'>TOTAL PRICE:{total}</p>
                <Link to="/dashboard/payment"><button className='btn btn-warning btn-sm'>PAY</button></Link>
            </div>
            <div className="overflow-x-auto">
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
                            <th>ACTION</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.instructor}</td>
                                <td>{item.availableSeats}</td>
                                <td>{item.email}</td>
                                <td><button onClick={()=>handleDelete(item)} className='px-4 py-2 bg-rose-900 text-white'>DELETE</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;