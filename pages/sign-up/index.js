import Head from 'next/head';
import  {FaRegEnvelope,} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {MdLockOutline} from 'react-icons/md'
import Link from 'next/link';

export default function signUp() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center justify-center w-2/3 flex-1 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 '>
          {/* Signin section */}
          <div className='w-2/3 p-5'> 
            <div className='text-left font-bold'>
              <span className='text-green-500'>Demo</span>World
            </div>
            <div className='py-10'>
              <h2 className='mb-5 ml-14' >Sign Up to Here</h2>
              <div className='flex flex-col items-center '>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 ml-32'>
                  <AiOutlineUser className='text-gray-400 m-2'  />
                  <input type="email" name="email" placeholder='Username' className='bg-gray-100 outline-none text-sm flex-1 '/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 ml-32'>
                  <FaRegEnvelope className='text-gray-400 m-2'  />
                  <input type="email" name="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1 '/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 ml-32'>
                  <MdLockOutline className='text-gray-400 m-2'  />
                  <input type="email" name="email" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1 '/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 ml-32'>
                  <MdLockOutline className='text-gray-400 m-2'  />
                  <input type="password" name="password" placeholder='Confirm Password' className='bg-gray-100 outline-none text-sm flex-1 '/>
                </div>
                <Link href="/">
                <a className='border-2 mt-5 border-green-500 text-green-500 rounded-full py-2 px-12 ml-32 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign in</a>
                </Link>
              </div>
            </div>
          </div>
          {/* Signup section */}
          {/* <div className='w-2/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-36 px-12'> 
            <h2 className='text-3xl font-bold mb-2'>Hey Friends!</h2>
            <div className='burder-2 w-10 border-white inline-block mb-2'></div>
            <p className=' mb-10'>Sign up with your personal data and start with us</p>
            <a href="#" className='border-2 border-white rounded-full py-2 px-12 inline-block font-semibold hover:bg-white hover:text-green-500'>Sign up</a>
          </div> */}
        </div>
      </main>
    </div>
  )
}