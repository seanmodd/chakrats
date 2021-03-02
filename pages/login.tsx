import Head from 'next/head';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import styles from '../styles/Login.module.css';
import Signin from '../components/Signin';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to be able to purchase" />
      </Head>
      <Signin />
    </div>
  );
}
