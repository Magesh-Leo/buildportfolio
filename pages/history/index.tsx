import React, { useEffect, useState } from 'react';
import Navbar from '../core/layout';
import axios from 'axios';
import Link from 'next/link';

function History() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(`https://625d371895cd5855d61d3b1e.mockapi.io/portfolios`)
        .then(res=>{
            console.log("Getting from api",res.data)
            setData(res.data)
        }).catch(err=>console.log(err))
    },[])
    const history = data.map((data,idx)=>{
        return (
            <tr key={data.id+idx} className='text-center'>
                <td className="border px-4 py-2 text-sm">{data.firstname}</td>
                <td className="border px-4 py-2 text-sm">{data.createdAt}</td>
                <td className="border px-4 py-2 text-sm">Null</td>
                <td className="flex flex-auto border justify-center items-center py-2">
                    <button className='border bg-slate-800 text-white rounded-2xl px-5 py-2'>View</button>
                    <Link href={`/${data.id}/edit`}>
                        <button className='border items-end bg-slate-800 text-white rounded-2xl px-5 py-2 ml-5'>Edit</button>
                    </Link>
                    <button className='border items-end bg-slate-800 text-white rounded-2xl px-5 py-2 ml-5'>Download</button>
                </td>
            </tr>
        )
    })
    return ( 
        <>
        <Navbar/>
        <div className='w-full justify-center items-center'>
            <div className='ml-10 mr-10 mt-5'>
                <div className='mb-6 mt-10 font-semibold text-4xl'>
                    <h1>History</h1>
                </div>
                <div className="flex flex-auto -mx-3 mb-2">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                        <th className="px-4 py-2">File Name</th>
                        <th className="px-4 py-2">Date Of Creation</th>
                        <th className="px-4 py-2">Last Update</th>
                        </tr>
                    </thead>
                        <tbody>
                            {history}
                        </tbody>
                </table>
            </div>
            </div>
        </div>
        </>
     );
}

export default History;