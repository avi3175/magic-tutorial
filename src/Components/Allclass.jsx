import React from 'react';
import allClass from '../hooks/classes';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useSpecial from '../hooks/useSpecial';

const Allclass = () => {
    const [school] = allClass()
    const { user } = useAuth()

    const items = school.filter(teacher => teacher.email === user.email)
    console.log(items)

    return (
        <div>
            <div className="flex flex-wrap justify-center">

                {
                    items.map(th => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={th.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{th.name}</h2>
                            <p>INSTRUCTOR:{th.instructor}</p>
                            <p>PRICE:{th.price}</p>
                            <p>SEAT:{th.seat}</p>
                            <p>STATUS:{th.status}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }


            </div>



        </div>
    );
};

export default Allclass;