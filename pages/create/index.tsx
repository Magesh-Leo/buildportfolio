import React, { isValidElement, useState } from 'react';
import { createPortfolioValidation } from '../../src/Validation';
import { CreatePortfolio } from '../../src/data/portfolio-create/create-portfolio-service';
import { CreatePortfolioRequest } from '../../src/data/portfolio-create/create-portfolio-request';
import Navbar from '../core/layout';
import {Formik, Form, useFormik} from 'formik';
import { AreaField, TextField } from '../../src/TextField';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import axios from 'axios';
import Link from 'next/link';

const Create = () =>  {
    const router = useRouter();
    const initialValues : CreatePortfolioRequest = {
        createdAt : "current date",
        firstname : '',
        lastname : '',
        gender : 'male',
        maritalstatus : '',
        email : '',
        linkedin : '',
        github : '',
        nationality : '',
        state : 'something',
        city : '',
        zipcode : '',
        description : '',
        profileimg : "sample.png"
    };
    const currentDate = new Date();
    const [firstname,setFirstname]= useState('')
    const [lastname,setLastname]= useState('')
    const [email,setEmail]= useState('')
    const [linkedin,setLinkedin]= useState('')
    const [github,setGithub]= useState('')
    const [nationality,setNationality]= useState('')
    const [city,setCity]= useState('')
    const [zipcode,setZipcode]= useState('')
    const [description,setDescription]= useState('')
    const [maritalstatus,setMaritalstatus] = useState('married')
    const [gender,setGender] = useState('male')
    const [state,setState] = useState('Tamilnadu')
    const [uploadfile,setUploadfile] = useState('')

    // const {mutate:postPortfolio, isLoading} = useMutation(CreatePortfolio,{
    //     onSuccess: () => {
    //         formik.resetForm(initialValues);
    //         router.push('/');
    //     },
    //     onError: () => {
    //       console.log('🔴 Error on creating Domain!');
    //     },
    // })

    const validatePortfolio = async (e)=>{
        e.preventDefault()
        let formData = {
          firstname: e.target[0].value,
          email: e.target[4].value,
          linkedin: e.target[5].value,
          github: e.target[6].value,
          nationality: e.target[7].value,
          city: e.target[9].value,
          zipcode: e.target[10].value,
          description: e.target[11].value
        }
        console.log(formData)
        const isValid = await createPortfolioValidation.isValid(formData)
        console.log(isValid)
    }

    const formik = useFormik({
        initialValues,
        validationSchema:{createPortfolioValidation},
        onSubmit: (values) => {
        const { createdAt,firstname , lastname,gender,maritalstatus,email,linkedin,github,nationality,
        state,city,zipcode,description,profileimg } = values;
        // const submitData = {
        //     createdAt,
        //     firstname,
        //     lastname,
        //     gender,
        //     maritalstatus,
        //     email,
        //     linkedin,
        //     github,
        //     nationality,
        //     state,
        //     city,
        //     zipcode,
        //     description,
        //     profileimg
        // };
        // postPortfolio(submitData);
        },
    });

    const postData = (e) => {
        e.preventDefault();
        axios.post(`https://625d371895cd5855d61d3b1e.mockapi.io/portfolios`,{
            createdAt:currentDate,
            firstname,
            lastname,
            gender,
            maritalstatus,
            email,
            linkedin,
            github,
            nationality,
            state,
            city,
            zipcode,
            description,
            uploadfile

        }).then(res => console.log('posting data',res)).catch(err=> console.log(err))
    }
    return ( 
        <>
        <Navbar/>
        <div className='w-full justify-center items-center'>
        
        <div className='ml-10 mr-10 mt-5'>
        <div className='mb-6 mt-10 font-semibold text-2xl'>
            <h4>Personal Info</h4>
        </div>
        <Formik
        initialValues={initialValues}
        validationSchema={createPortfolioValidation}
        onSubmit = {values=> {
            console.log(values)
        }}
        >
        {formik => (
        <form 
        className="w-full form" 
        onSubmit={formik.handleSubmit}
        >
            <div className="flex flex-auto -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstname">
                        First Name
                    </label>
                    <TextField value={firstname} onChange={(e)=>setFirstname(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="firstname" type="text" placeholder="john" />
                    {/*
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastname">
                        Last Name
                    </label>
                    <TextField
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="lastname"
                        type="text"
                        placeholder="Doe"
                        value={lastname}
                        onChange={(e)=>setLastname(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="gender">
                        Gender
                    </label>
                    <select name='gender' value={gender} onChange={(e)=>setGender(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                    </select>
                    {/*
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="maritalstatus">
                        Marital Status
                    </label>
                    <select name='maritalstatus' value={maritalstatus} onChange={(e)=>setMaritalstatus(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        <option value="married">Married</option>
                        <option value="unmarried">Unmarried</option>
                    </select>
                </div>
                
            </div>
            <div className="flex flex-auto -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <TextField value={email} onChange={(e)=>setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="Example@gmail.com" />
                    {/*
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    */}
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="linkedin">
                        LinkedIn
                    </label>
                    <TextField value={linkedin} onChange={(e)=>setLinkedin(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="linkedin" type="text" placeholder="linkedIn" />
                    {/*
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    */}
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="github">
                        Github
                    </label>
                    <TextField value={github} onChange={(e)=>setGithub(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="github" type="text" placeholder="Github" />
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
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nationality">
                        Nationality
                    </label>
                    <TextField
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="nationality"
                        type="text"
                        placeholder="India"
                        value={nationality}
                        onChange={(e)=>setNationality(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
                        State
                    </label>
                    <div className="relative">
                        <select name='state' value={state} onChange={(e)=>setState(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="state">
                            <option value="Tamilnadu">Tamil Nadu</option>
                            <option value='Kerala'>Kerala</option>
                            <option value='Andrapradhesh'>Andra pradesh</option>
                            <option value='karnataka'>Karnataka</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                        City/Village
                    </label>
                    <TextField
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="city"
                        type="text"
                        placeholder="city/village"
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="zip">
                        Zip
                    </label>
                    <TextField
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="zipcode"
                        type="text"
                        placeholder="90210"
                        value={zipcode}
                        onChange={(e)=>setZipcode(e.target.value)}
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
                        <tr className='text-center'>
                        <td className="border px-4 py-2">Intro to CSS</td>
                        <td className="border px-4 py-2">Adam</td>
                        <td className="border px-4 py-2">858</td>
                        <td className="border px-4 py-2">89</td>
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
                    <AreaField
                    className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    name="description"
                    rows="3"
                    placeholder="Your message"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    />
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    name='profileimg' 
                    id="formFile"
                    onChange={(e)=>{
                        console.log(e.target.files);
                        console.log(e.target.files[0])
                        setUploadfile(e.target.files[0].name)}}/>
                </div>
            </div>
            <div className='flex flex-auto pt-10 justify-center font-semibold text-2xl'>
                <h4 className='pt-10 font-semibold justify text-2xl mb-6'>Click here to Download Your Portfolio</h4>
            </div>
            <div className='flex flex-auto pt-10 justify-center font-semibold text-2xl'>\
                <Link href='/history'>
                    <button 
                    onClick={postData}
                    type='submit' 
                    // disabled={isLoading} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                    Download PDF
                    </button>
                </Link>
            </div>
            <div className='flex flex-auto pt-10 justify-center font-semibold text-2xl'>
            </div>
        </form>
        )}
        </Formik>
            
        </div>
        </div>
        </>
     );
}

export default Create;