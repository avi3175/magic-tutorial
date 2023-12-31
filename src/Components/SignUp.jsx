import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import Nabvar from './Nabvar';
import { useNavigate } from 'react-router-dom';
import userStack from '../hooks/Userstack';


const SignUp = () => {
    const navigate = useNavigate()
    const [cart,refetch] = userStack()
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser,update} = useContext(AuthContext)
    const onSubmit = data => {
        
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            update(data.name)
            .then(()=>{
                    console.log("user updated")
                    reset()
            })
            .catch(error=>console.log(error))
        })

        update(data.name,data.photoURL)
        .then(()=>{
            alert("USER PROFILE UPDATED")
            navigate('/')
        })
       .catch(error=>console.log(error))

        const role = "student"
        const name = data.name
        const email = data.email
        const password = data.password

        const user = {
            userName:name,email,role,password
        }
  

       fetch('https://magic-server.vercel.app/users',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.insertedId){
            refetch()
            alert('INSERTED SUCCESSFULLT')
        }
       })
    };




    return (
        <div>
            <Helmet>
                <title>SIGN UP || MAGIC SCHOOL</title>
            </Helmet>
            <Nabvar></Nabvar>
            <div className="hero min-h-screen bg-gradient-to-r from-black to-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-violet-100 to-black">
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

                            <input type="file" className="file-input file-input-bordered bg-rose-700 w-full max-w-xs"  />       

                            <input type="submit" value="REGISTER" className='text-white font-bold bg-indigo-400 p-4' />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;