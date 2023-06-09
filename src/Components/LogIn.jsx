import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import Nabvar from './Nabvar';

const LogIn = () => {
    const navigation = useNavigate()
    const location = useLocation()
    const {logIn} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const from = location.state?.from?.pathname || '/'


    const onSubmit = data =>{
         console.log(data)
         logIn(data.email,data.password)
         .then(result=>{
            const user = result.user
            console.log(user)
            navigation(from,{replace:true})
         })
        };

    return (

        <div>
            <Nabvar></Nabvar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    name='email'
                                    className="input input-bordered"
                                    {...register("email")}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="password"
                                    name='password'
                                    className="input input-bordered"
                                    {...register("password")}
                                />

                            </div>
                            <input type="submit" value="LOG IN" />
                            <p>NEW TO WEBSITE?<span className='text-sky-900' ><Link to="/signup">CLICK HERE</Link></span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;