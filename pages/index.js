import Head from 'next/head';
import  {FaFacebook, FaLinkedinIn,FaGoogle, FaRegEnvelope,} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import Link from 'next/link';

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './core/layout';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className=' flex flex-col justify-center items-center w-full mt-60'>
        <h1 className='font-bold items-center text-4xl'>Want To Build Your Portfolio</h1>
        <br/><span className='text-green-500'>Click to <strong>Create new portfolio</strong> Button</span>
      </div>
    </div>
  )
}
