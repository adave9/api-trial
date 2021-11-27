import './App.css';
import axios from "axios";

import React,{useState,useEffect} from 'react';

const fetchData=()=>{
  return(

          // Make a request for a user with a given ID
          axios.get('https://randomuser.me/api')
          .then(({data})=> {
            // handle success
            console.log(data);
            return JSON.stringify(data,null,2);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
  );
}

function App() {

const [counter,setCounter]=useState(0); 
const [randomUser,setRandomUser]=useState('');



//https://randomuser.me/api

  useEffect(()=>{
    fetchData().then((user)=>{
      setRandomUser(user);
    });
  },[]);

  return (
    <div className="App">
      <h1>Counter</h1>
      {counter}<br/><br/>
      <button onClick={()=>{
          setCounter(counter+1)
      }}>
         Increment Counter 
        </button><br/><br/>
        <pre>
        {randomUser}
        </pre>
    </div>
  );
}



export default App;
