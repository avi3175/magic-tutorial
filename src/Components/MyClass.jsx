import React, { useContext } from 'react';
import allClass from '../hooks/classes';
import { AuthContext } from '../Provider/AuthProvider';
import userStack from '../hooks/Userstack';

const MyClass = () => {
    const { user, logOut } = useContext(AuthContext)
    const [school,loading] = allClass()
    const [,refetch] = userStack()
    const items = school.filter(item => item.status === "approve")

    // console.log(school)

    const handleAddToCart = (item) =>{
            console.log(item)
            if(user && user.email){
                const name = item.name
                const price = item.price
                const instructor = item.instructor
                const availableSeats = item.availableSeats
                const image = item.image
               const order = {name,price,instructor,availableSeats,image,email:user.email}
                fetch('http://localhost:5000/cart',{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(order)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                        refetch()
                        alert("insert successfully")
                        // loading(false)
                    }
                })
            }
            else{
                alert('PLEASE SIGN IN')
            }
    }




    return (
        <div className=' px-10 py-5 bg-black'>

            <h1 className='text-3xl text-white mb-5 mt-5'>ALL THE APPROVED CLASS</h1>
            <div className="flex flex-wrap justify-center px-10">

                {
                    items.map(th => <div key={th._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-lg">
                            <img
                                className="w-full h-40 object-cover rounded-t-lg"
                                src={th.image}
                                alt="Card Image"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{th.name}</h3>
                                <p className="text-gray-700">
                                    {th.email}
                                </p>
                                <p className="text-gray-700">
                                    {th.instructor}
                                </p>
                                <p className="text-gray-700">
                                   AVAILABLE SEATS: {th.availableSeats}
                                </p>
                                <p className="text-gray-700">
                                   PRICE: {th.price}
                                </p>
                                <button onClick={()=>handleAddToCart(th)} className='bg-blue-400 py-2 px-4 text-white'>ENROLL NOW</button>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default MyClass;