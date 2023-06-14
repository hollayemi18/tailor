import React from 'react'
import eas4 from '../../image/homepage2.jpg'
import eas3 from '../../image/eas5.jpg'
import eas2 from '../../image/as14.png'
import { Link } from 'react-router-dom'
import eas5 from '../../image/eas6.jpg'
import Footer from '../../pages/Footer'
const Blog = () => {
  return (
    <div>
         <Link to="/" className="ml-8" >
               <h2 className=" font-serif font-semibold text-indigo-600 md:text-4xl text-2xl">Ease BLOG </h2>       
             </Link>
             <div className='fw-full grid mt-10 grid-cols-1 px-10 md:flex flex-row gap-2 pb-16 text-indigo-900'>
                <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-96 md:w-80">
    <Link class="block w-full h-full">
        <img alt="blog " src={eas3} class="object-cover w-full max-h-40"/>
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
                Article
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Supercharged !
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p>
            <div class="flex items-center mt-4">
                <Link  class="relative block">
                    <img alt="profil" src={eas2} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                </Link>
                <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">
                        Jean Jacques
                    </p>
                    <p class="text-gray-400 dark:text-gray-300">
                        20 mars 2029 - 6 min read
                    </p>
                </div>
            </div>
        </div>
    </Link>
</div>
<div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-96 md:w-80">
    <Link class="block w-full h-full">
        <img alt="blog " src={eas4} class="object-cover w-full max-h-40"/>
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
                Article
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Supercharged !
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p>
            <div class="flex items-center mt-4">
                <Link  class="relative block">
                    <img alt="profil" src={eas2} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                </Link>
                <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">
                        Jean Jacques
                    </p>
                    <p class="text-gray-400 dark:text-gray-300">
                        20 mars 2029 - 6 min read
                    </p>
                </div>
            </div>
        </div>
    </Link>
</div>
<div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-96 md:w-80">
    <Link class="block w-full h-full">
        <img alt="blog " src={eas5} class="object-cover w-full max-h-40"/>
        <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">
                Article
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Supercharged !
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
            </p>
            <div class="flex items-center mt-4">
                <Link  class="relative block">
                    <img alt="profil" src={eas2} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                </Link>
                <div class="flex flex-col justify-between ml-4 text-sm">
                    <p class="text-gray-800 dark:text-white">
                        Jean Jacques
                    </p>
                    <p class="text-gray-400 dark:text-gray-300">
                        20 mars 2029 - 6 min read
                    </p>
                </div>
            </div>
        </div>
    </Link>
</div>
             </div>
             <Footer />
    </div>
  )
}

export default Blog