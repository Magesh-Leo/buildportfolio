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
    </div>
  )
}
