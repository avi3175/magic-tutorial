import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        if (data.confirm !== data.password) {
            alert("PASSWORD DOES NOT MATCH")
        }else{
            console.log(data)
        }
       
    };




    return (
        <div>
            <Helmet>
                <title>SIGN UP || MAGIC SCHOOL</title>
            </Helmet>
            <div className="hero min-h-screen bg-gradient-to-r from-violet-900 to-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-rose-900 to-blue-900">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input
                                    type="text"
                                    placeholder="name"
                                    name='name'
                                    className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className='text-rose-900'>This field is required</span>}
                            </div>

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
                                {errors.name && <span className='text-rose-900'>This field is required</span>}
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
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 10,
                                        pattern: /[!@#$%^&*()\-=_+[\]{}|\\;:'",.<>/?]/
                                    })}
                                />
                                {errors.password?.type === 'pattern' && <span className='text-rose-700'>Password need one special charecter</span>}

                                {errors.password?.type === 'required' && <span className='text-rose-700'>Password is required</span>}

                                {errors.password?.type === 'minLength' && <span className='text-rose-700'>Password must be 6 charecters</span>}

                                {errors.password?.type === 'maxLength' && <span className='text-rose-700'>Password must be less then than 10 charecters</span>}


                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="password"
                                    name='confirm'
                                    className="input input-bordered"
                                    {...register("confirm", { required: true })}
                                />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                            </div>


                            <input type="submit" value="REGISTER" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;