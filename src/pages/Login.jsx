import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate, Link } from 'react-router-dom';
//import { Loader } from '../layouts/utils';
import { Checkbox, Input } from '../layouts/field';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    const local = process.env.REACT_MODE;
    e.preventDefault();

    if (!email) {
      return toast.error('All fields are required');
    }
    if (!password) {
      return toast.error('All fields are required');
    }
    try {
      const res = await axios.post(
        `${local}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (res.status === 400) {
        toast.error('Email or Passowrd is Incorrect');
      } else {
        toast.success('Email or Passowrd is Incorrect');
        history('/dashboard');
      }
    } catch (error) {
      toast.error('Email or Password is Incorrect');
    }
  };

  return (
    <div
      className='flex flex-col gap-1 mx-10 mb-8 md:mx-72 pt-10 bg-[top_120px_right] md:bg-[top_150px_right]  bg-auto  bg-no-repeat'
      style={{ backgroundImage: "url('/images/banner-map.png')" }}
    >
      <div>
        <div>
          <Link to='/' className='text-center'>
            <h2 className=' font-serif font-semibold text-indigo-600 md:text-4xl text-2xl'>
              EASE
            </h2>
          </Link>
        </div>
        <h3 className='text-center text-xl font-semibold text-black'>
          Login to Account
        </h3>
        <i className='text-center md:hidden text-sm mt-2 mb-4'>
          Please sign-in to your account to continue the adventure.
        </i>

        <form className='space-y-5' onSubmit={login}>
          <ToastContainer />
          <div>
            <Input
              label={'Email'}
              id='email'
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Input
              label={'Password'}
              id='password'
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='flex items-center justify-between'>
            <Checkbox id='remember' label='Remember Me' />

            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
          <button
            className='text-white transition-all duration-300 px-2 border py-3 rounded-md
                  border-gray-300 w-full flex justify-center items-center space-x-2 bg-indigo-500 hover:bg-gray-300'
            onSubmit={login}
          >
            <span>Sign in</span>
          </button>

          <div className='flex items-center justify-center space-x-3'>
            <hr className='w-12' />
            <span className='font-bold uppercase text-xs text-gray-400'>
              Or
            </span>
            <hr className='w-12' />
          </div>

          <div className='flex items-center space-x-4 lg:space-x-2 xl:space-x-4 text-sm font-semibold'>
            <button className='transition-all duration-300 px-2 border py-3 rounded-md border-gray-300 w-full flex justify-center items-center space-x-2 hover:bg-gray-300'>
              <FcGoogle className='h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5' />

              <span className='text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm'>
                Continue with Google
              </span>
            </button>
          </div>

          <p className='text-sm text-center'>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
