import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { PrimaryButton, SecondaryButton } from "../layouts/buttons";
import { Checkbox, Input } from '../layouts/field';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [reg, setReg] = useState("");

  const register = async (e) => {
    const local = process.env.REACT_MODE;
    e.preventDefault();
    if (!email) {
      return toast.error('All fields are required');
    }
    if (!username) {
      return toast.error('All fields are required');
    }
    if (!password) {
      return toast.error('All fields are required');
    }

    await axios
      .post(
        `${local}auth/register`,
        {
          username,
          email,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 403) {
          toast.error('Not Successful!');
        } else if (res.status === 400) {
          toast.error('Email is registered ');
        } else if (res.status === 401) {
          toast.error('Username Is taken');
        } else {
          toast.success('Successfully register');
          navigate('/login');
        }
      })
      .catch((error) => {
        return error;
      });
  };
  return (
    <div
      className='flex flex-col gap-1 mx-10 mb-8 md:mx-72 pt-4 relative bg-auto bg-[top_120px_right] md:bg-[top_150px_right]  bg-no-repeat'
      style={{ backgroundImage: "url('/images/banner-clock.png')" }}
    >
      <div>
        <Link to='/' className='text-center '>
          <h2 className=' font-serif font-semibold text-indigo-600 md:text-4xl text-2xl'>
            EASE
          </h2>
        </Link>
      </div>
      <h3 className='text-center text-xl font-semibold text-black'>
        Create New Account
      </h3>
      <i className='text-center text-sm mt-2 mb-2'>
        start an adventure of a good lifestyle
      </i>
      <form className='space-y-5' method='POST' onSubmit={register}>
        <ToastContainer />
        <div>
          <Input
            label={'Username'}
            id='username'
            type='text'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

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

        <div>
          <Checkbox id='remember' label='I agree to privacy policy & terms' />
        </div>

        <button
          className='text-white transition-all duration-300 px-2 border py-3 rounded-md border-gray-300 w-full flex justify-center items-center space-x-2 bg-indigo-500 hover:bg-gray-300'
          onSubmit={register}
        >
          <span>Sign up</span>
        </button>

        <div className='flex items-center justify-center space-x-3'>
          <hr className='w-12' />
          <span className='font-bold uppercase text-xs text-gray-400'>Or</span>
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
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
