import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../image/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faBell } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const notify = <FontAwesomeIcon icon={faCartPlus} size='xl' />;
const bell = <FontAwesomeIcon icon={faBell} size='xl' />;
//const wave = <FontAwesomeIcon icon={faHand} shake />;

const Navbar = () => {
  //const [logging, setLogging] = useState(false);
  const [username, setUsername] = useState('');

  useEffect((e) => {
    e.preventDefault();
    const local = process.env.REACT_APP_DEV_MODE;
    const fetchData = async () => {
      try {
        const result = await axios.get(`${local}auth/user`, {
          withCredentials: true,
        });
        const data = result.data;
        if (data) {
          setUsername(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=' flex flex-row pt-0 mx-1 justify-between lg:justify-evenly py-0xl:py-0 border-b-1 '>
      <div className='ml-5 flex flex-row'>
        <img
          className='w-12 rounded-full  mt-6 ring-offset-base-100 '
          src={avatar}
          alt='DP'
        />
        <div className='mt-6  ml-2 flex flex-col'>
          {username && <em className='text-2xl text-black'>{username},</em>}
          <i className=' font-serif text-sm'>
            welcome
            <span className='text-sm font-serif text-green-600 ml-1'>back</span>
          </i>
        </div>
      </div>
      <div className='mt-8 mr-5 hover:bg-white text-blue-900  grid bg-transparent grid-cols-2 gap-6 '>
        <Link> {notify}</Link>
        <Link> {bell}</Link>
      </div>
    </div>
  );
};

export default Navbar;
