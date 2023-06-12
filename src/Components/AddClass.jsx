import React from 'react';
import useAuth from '../hooks/useAuth';
import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_upload_token

const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth()
    console.log(user)


    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    //    const createClass = (event) =>{
    //     event.preventDefault()
    //     const form = event.target
    //     const name = form.name.value
    //     const instructorName = form.instructor.value
    //     const email = form.email.value
    //     const seat = form.seat.value
    //     const price = form.price.value
    //     const image = form.image.file
    //     console.log(name,instructorName,email,seat,price,image,event)


    //     const formData = new FormData()
    //  } 

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url
                    // console.log(data,imgURL)
                    const status = "pending"
                    const { name, email, instructor, price, seat } = data
                    const classItem = { name, price: parseFloat(price), instructor, email, seat: parseInt(seat), image: imgURL,status }
                    // console.log(classItem)

                    // POST FOR THE DATABASE


                    fetch('https://magic-server.vercel.app/class', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(classItem)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                // refetch()
                                alert('INSERTED SUCCESSFULLT')
                            }
                        })
                }

            })









    };





    return (
        <div>
            <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="className">
                            Class Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="className"
                            type="text"
                            placeholder="Enter class name"
                            name='name'
                            {...register("name")}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classImage">
                            Class Image
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="classImage"
                            type="file"
                            accept="image/*"
                            // name='image'
                            {...register("image")}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorName">
                            Instructor Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="instructorName"
                            type="text"
                            value={user.displayName}
                            name='instructor'
                            {...register("instructor")}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorEmail">
                            Instructor Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="instructorEmail"
                            type="email"
                            value={user.email}
                            name='email'
                            {...register("email")}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availableSeats">
                            Available Seats
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="availableSeats"
                            type="number"
                            min="0"
                            placeholder="Enter available seats"
                            name='seat'
                            {...register("seat")}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="price"
                            type="number"
                            min="0"
                            step="0"
                            placeholder="Enter price"
                            name='price'
                            {...register("price")}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="CREATE CLASS" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;