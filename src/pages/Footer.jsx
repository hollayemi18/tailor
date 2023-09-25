import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from 'react-icons/sl';

import { Container } from '../layouts/utils';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='wow fadeInLeft bg-[#f9f9fc] pt-24 pb-20 mt-10border-t border-indigo-100'>
      <Container>
        <img
          src='/images/foot.jpg'
          className='w-full object-center -mt-20 object-cover border-b'
          alt=''
        />

        <div className='mt-8 flex items-center justify-between'>
          <p className='text-gray-500 uppercase text-xs font-light md:text-base'>
            Copyright © {year} <em className='font-semibold'>EaseTech</em>. All
            Rights Reserved.
          </p>

          <div className='flex items-center space-x-4 text-indigo-800'>
            <span className='bg-white shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2'>
              <SlSocialFacebook className='w-6 h-6' />
            </span>

            <span className='bg-white shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2'>
              <SlSocialTwitter className='w-6 h-6' />
            </span>

            <span className='bg-white shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2'>
              <SlSocialInstagram className='w-6 h-6' />
            </span>

            <span className='bg-white shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2'>
              <SlSocialLinkedin className='w-6 h-6' />
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
