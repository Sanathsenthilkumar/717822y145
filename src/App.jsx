import { useState,useEffect } from 'react'
import './App.css'
import { getDetails } from './api/fetch';
import Page1 from './components/page1';
function App() {

    const[user,setUser] = useState(null);
    useEffect(()=>{
        getDetails().then((e) => setUser(e.users));
    }, [user])

  return (
    user ? <Page1 name = {user[1]}/> : <>no data</>
  )
}

export default App
