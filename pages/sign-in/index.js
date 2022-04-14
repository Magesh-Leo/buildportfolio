import React from 'react';
import Head from 'next/head';
import  {FaFacebook, FaLinkedinIn,FaGoogle, FaRegEnvelope,} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import Link from 'next/link';

function signIn() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
            <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 '>
              {/* Signin section */}
              <div className='w-3/5 p-5'> 
                <div className='text-left font-bold'>
                  <span className='text-green-500'>Demo</span>World
                </div>
                <div className='py-10'>
                  <h2 >Sign in to Here</h2>
                  <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
                  <div className='flex justify-center my-2'>
                    <a className='border-2 border-gray-200 rounded-full p-3 mx-1' href="#"><FaFacebook className='text-sm'/></a>
                    <a className='border-2 border-gray-200 rounded-full p-3 mx-1' href="#"><FaLinkedinIn className='text-sm'/></a>
                    <a className='border-2 border-gray-200 rounded-full p-3 mx-1' href="#"><FaGoogle className='text-sm'/></a>
                  </div>{/* Social apps login */}
                  <p className='text-gray-400 my-3'> or use Email Account</p>
                  <div className='flex flex-col items-center'>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                      <FaRegEnvelope className='text-gray-400 m-2'  />
                      <input type="email" name="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1 '/>
                    </div>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                      <MdLockOutline className='text-gray-400 m-2'  />
                      <input type="password" name="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1 '/>
                    </div>
                    <div className='flex justify-between w-64 mb-5'>
                      <label className='flex items-center text-xs'>
                        <input type="checkbox" name="remember" className='mr-1'/>
                        Remember me
                      </label>
                      <a href="#" className='text-xs'>Forget Password?</a>
                    </div>
                    <Link href="/">
                    <a className='border-2 border-green-500 text-green-500 rounded-full py-2 px-12 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign in</a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Signup section */}
              <div className='w-2/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-36 px-12'> 
                <h2 className='text-3xl font-bold mb-2'>Hey Friends!</h2>
                <div className='burder-2 w-10 border-white inline-block mb-2'></div>
                <p className=' mb-10'>Sign up with your personal data and start with us</p>
                <Link href="sign-up">
                <a className='border-2 border-white rounded-full py-2 px-12 inline-block font-semibold hover:bg-white hover:text-green-500'>Sign up</a>
                </Link>
              </div>
            </div>
          </main>
        </div>
      )
}

export default signIn;