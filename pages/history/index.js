import React from 'react';
import Navbar from '../core/layout';

function history() {
    return ( 
        <>
        <Navbar/>
        <div classNameName='w-full justify-center items-center'>
            <div className='ml-10 mr-10 mt-5'>
                <div className='mb-6 mt-10 font-semibold text-4xl'>
                    <h1>History</h1>
                </div>
                <div className="flex flex-auto -mx-3 mb-2">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                        <th className="px-4 py-2">File Name</th>
                        <th className="px-4 py-2">Date Of Cration</th>
                        <th className="px-4 py-2">Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border px-4 py-2">Intro to CSS</td>
                        <td className="border px-4 py-2">Adam</td>
                        <td className="border px-4 py-2">858</td>
                        <td className="flex flex-auto border justify-center items-center py-2">
                            <button className='border bg-slate-800 text-white rounded-2xl px-5 py-2'>View</button>
                            <button className='border items-end bg-slate-800 text-white rounded-2xl px-5 py-2 ml-5'>Edit</button>
                        </td>
                        
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </>
     );
}

export default history;