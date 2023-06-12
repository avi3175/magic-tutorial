import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import Nabvar from './Nabvar';

const LogIn = () => {
    const navigation = useNavigate()
    const location = useLocation()
    const { logIn, handleGoogle } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const from = location.state?.from?.pathname || '/'


    const onSubmit = data => {
        //  console.log(data)
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user
                // console.log(user)
                navigation(from, { replace: true })
            })
    };


    const handleG = () => {
        handleGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <div>
            <Nabvar></Nabvar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-center">
                        <h1 className="text-3xl uppercase font-bold">Login now!</h1>

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
                    <button onClick={handleG} className='text-3xl font-bold text-white bg-sky-900 p-3'>SIGN IN WITH GOOLGE</button>
                </div>
            </div>

        </div>
    );
};

export default LogIn;