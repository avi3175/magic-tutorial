import React from 'react';
import allClass from '../hooks/classes';

const MyClass = () => {
    const [school] = allClass()
    console.log(school)
    return (
        <div className='mt-12'>
            <div className="flex flex-wrap justify-center">

                {
                    school.map(th => <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
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
                                <button className='bg-blue-400 py-2 px-4 text-white'>ENROLL NOW</button>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default MyClass;