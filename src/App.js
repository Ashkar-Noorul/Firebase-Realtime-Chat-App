import { useState } from 'react';
import './App.css';
import Auth from './components/Auth';
import Cookies from 'universal-cookie';
import { AppWrapper } from './components/AppWrapper';
import { Chat } from './components/Chat';

const cookies = new Cookies();

function App() {
  const[isAuth, setIsAuth]=useState(cookies.get("auth-token"));
  const[isInChat, setIsInChat] = useState(null);
  const[room, setRoom] = useState("");
  if(!isAuth){
    return(
      <AppWrapper
      isAuth={isAuth}
      setIsAuth = {setIsAuth}
      setIsInChat = {setIsInChat}
      >
        <Auth setIsAuth={setIsAuth}/>
      </AppWrapper>
    );
  }

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ?(
        <div className="room">
          <label>Type room name: </label>
          <input onChange={(e)=>setRoom(e.target.value)} />
          <button onClick={()=>{setIsInChat(true)}}>Enter Chat</button>
        </div>
      ):(
        <Chat room={room}/>
      )}
    </AppWrapper>
  );
}

export default App;
