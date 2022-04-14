import React from 'react';
import Navbar from '../core/layout';
import img from 'next/image'

function Profile() {
    return ( 
        <>
        <Navbar/>
        <div className='flex flex-auto'>
            <div classNameName='w-60 justify-center items-center'>
                <div className='ml-20 mr-10 mt-5'>
                    <div className='mb-6 mt-10 font-semibold text-4xl'>
                        <h1 className='font-semibold mb-6 ml'>Profile Update</h1>
                    </div>
                    <div>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="portfolio@gmail.com" />
                            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2 ml-1 ">
                            <div className="mb-3 xl:w-full">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-gray-700"
                                >Bio</label
                                >
                                <textarea
                                className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="description"
                                rows="3"
                                placeholder="Your message"
                                ></textarea>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <div classNameName='w-40 justify-center items-center'>
                <div>
                <div className="w-72 gap-4 flex flex-auto items-center justify-center my-10 mx-52">
                    <div className="mb-4">
                        <img src='https://mdbootstrap.com//img/Photos/Square/1.jpg' className="max-w-full h-auto rounded-full" alt="profile"/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mb-3 w-96">
                        <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">Upload Picture</label>
                        <input className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
                    </div>
                    </div>
                </div>
            </div>  
        </div>
        </>
     );
}

export default Profile;