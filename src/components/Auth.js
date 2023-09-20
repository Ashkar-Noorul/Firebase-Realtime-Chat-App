import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';
import '../styles/Auth.css';

const cookies = new Cookies();

const Auth = ({setIsAuth}) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token",result.user.refreshToken);
      setIsAuth(true);
    }
    catch(err){
      console.error(err);
    }
    

  };
  return (
    <div className='auth'>
      <p>Sign In With Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Auth