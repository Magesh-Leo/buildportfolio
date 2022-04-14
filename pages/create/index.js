import React from 'react';
import Navbar from '../core/layout';

function create() {
    return ( 
        <>
        <Navbar/>
        <div classNameName='w-full justify-center items-center'>
        
        <div className='ml-10 mr-10 mt-5'>
        <div className='mb-6 mt-10 font-semibold text-2xl'>
            <h4>Personal Info</h4>
        </div>
        <form className="w-full">
            <div className="flex flex-auto -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    {/*
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Gender
                    </label>
                    <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                    </select>
                    {/*
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Marital Status
                    </label>
                    <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        <option value="married">Married</option>
                        <option value="unmarried">Unmarried</option>
                    </select>
                </div>
                
            </div>
            <div className="flex flex-auto -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="Example@gmail.com" />
                    {/*
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    */}
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Linkedin id
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="linkedIn" />
                    {/*
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    */}
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Github id
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Github" />
                    {/*
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    */}
                </div>
            </div>
            <div className='pt-10 font-semibold text-2xl mb-6'>
            <h4>Address Info</h4>
            </div>
            <div className="flex flex-auto -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        Nationality
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="text"
                        placeholder="India"
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        State
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        City/Village
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        placeholder="city/village"
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Zip
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        placeholder="90210"
                    />
                </div>
            </div>
            <div className='flex flex-auto pt-10 justify-start font-semibold text-2xl'>
                <h4 className='pt-10 font-semibold justify text-2xl mb-6'>Address Info</h4>
            </div>
            <div className='flex flex-auto justify-end font-semibold text-2xl'>
            <h5 className='border border-1 bg-blue-500 text-white rounded-md items-end p-2 text-2xl mb-4'>Add Row</h5>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                        <th className="px-4 py-2">Qualification</th>
                        <th className="px-4 py-2">Year of passing</th>
                        <th className="px-4 py-2">Institue/university Name</th>
                        <th className="px-4 py-2">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border px-4 py-2">Intro to CSS</td>
                        <td className="border px-4 py-2">Adam</td>
                        <td className="border px-4 py-2">858</td>
                        <td className="border px-4 py-2">858</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex flex-auto pt-10 justify-around font-semibold text-2xl'>
                <h4 className='pt-10 font-semibold justify text-2xl mb-6'>Description</h4>
                <h4 className='pt-10 font-semibold justify text-2xl mb-6'>picture upload</h4>
            </div>
            <div className="flex justify-around">
                <div className="mb-3 xl:w-96">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-gray-700"
                    >Example textarea</label
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
                <div className="mb-3 w-96">
                    <label htmlFor="formFileMultiple" className="form-label inline-block mb-2 text-gray-700">Able to Upload Multiple files</label>
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple" multiple />
                </div>
            </div>
            <div className='flex flex-auto pt-10 justify-center font-semibold text-2xl'>
                <h4 className='pt-10 font-semibold justify text-2xl mb-6'>Click here to Download Your Portfolio</h4>
            </div>
            <div className='flex flex-auto pt-10 justify-center font-semibold text-2xl'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Download PDF
            </button>
            </div>
            <div className='flex flex-auto pt-10 justify-center font-semibold text-2xl'>
            </div>
        </form>
            
        </div>
        </div>
        </>
     );
}

export default create;