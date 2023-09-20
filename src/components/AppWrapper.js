import React from 'react';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const AppWrapper = ({isAuth, setIsAuth, children, setIsInChat}) => {
  const signUserOut = async()=>{
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  }
  return (
    <div className='App'>
      <div className="app-header">
        <h1>Chat App</h1>
      </div>
      <div className="app-container">{children}</div>
      {isAuth && (
        <div className="sign-out">
          <button onClick={signUserOut}>Sign Out</button>
        </div>
      )}
    </div>
  )
}
