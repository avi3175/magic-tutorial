import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };




    return (
        <div>
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
                                        pattern:/[!@#$%^&*()\-=_+[\]{}|\\;:'",.<>/?]/
                                    })}
                                />
                                {errors.password?.type === 'pattern' && <span className='text-rose-700'>Password need one special charecter</span>}

                                {errors.password?.type === 'required' && <span className='text-rose-700'>Password is required</span>}

                                {errors.password?.type === 'required' && <span className='text-rose-700'>Password must be 6 charecters</span>}

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