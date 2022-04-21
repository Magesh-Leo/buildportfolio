import Head from 'next/head';
import  {FaRegEnvelope,} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {MdLockOutline} from 'react-icons/md'
import Link from 'next/link';
import { signupValidation} from '../../src/Validation';
import {Formik, Form, useFormik} from 'formik';
import { TextField } from '../../src/TextField';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';

export default function signUp() {

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  interface MySignUpFormValues {
    username :String,
    email:String,
    password: String,
    password2:String
  }

  const initialValues : MySignUpFormValues = {
    username :'',
    email:'',
    password: '',
    password2:''
  }
  // const createUser = async (e)=>{
  //   e.preventDefault()
  //   let formData = {
  //     username: e.target[0].value,
  //     email: e.target[1].value,
  //     password: e.target[2].value,
  //     password2: e.target[3].value,
  //   }
  //   // const username = formData.username
  //   // const email =  formData.email
  //   // const password = formData.password
  //   // await axios.post('https://625d371895cd5855d61d3b1e.mockapi.io/signUp',{
  //   //   username,
  //   //   email,
  //   //   password
  //   // })
  //   // .then((res) => console.log("posting signup data", res))
  //   console.log(formData)
  //   const isValidSignUp = await signupValidation.isValid(formData)
  //   console.log(isValidSignUp)
  // }

  const signUp = async (data: MySignUpFormValues) => {
    const { data: response } = await axios.post('https://625d371895cd5855d61d3b1e.mockapi.io/signUp', data);
    console.log('posting sign up data', response);
    return response;
  };

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
              <h2 className='mb-5 ml-32 font-bold ' >Sign Up to Here</h2>
              <Formik
              initialValues={initialValues}
              validationSchema={signupValidation}
              onSubmit = {(values)=>{
                console.log(values)
                {signUp(values)}
              }}
              >
              {formik => (
              <Form className='form'>   
              <div className='flex flex-col '>
                <div className='flex flex-row bg-gray-100 w-64 p-2 items-center mb-3 ml-24'>
                  <AiOutlineUser className='text-gray-400 m-2'  />
                  <TextField type="text" name="username" placeholder='Username' className='bg-gray-100 outline-none text-sm flex-1 '/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 ml-24'>
                  <FaRegEnvelope className='text-gray-400 m-2'  />
                  <TextField type="email" name="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1 '/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 ml-24'>
                  <MdLockOutline className='text-gray-400 m-2'  />
                  <TextField type="password" name="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1 '/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 ml-24'>
                  <MdLockOutline className='text-gray-400 m-2'  />
                  <TextField type="password" name="password2" placeholder='Confirm Password' className='bg-gray-100 outline-none text-sm flex-1 '/>
                </div>
                {/* <Link href="/sign-in"> */}
                <button 
                type='submit'
                className='submit border-2 mt-5 border-green-500 text-green-500 rounded-full py-2 px-12 ml-32 inline-block font-semibold hover:bg-green-500 hover:text-white'
                >Sign up</button>
                {/* </Link> */}
              </div>
              </Form>
              )}
              </Formik>
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