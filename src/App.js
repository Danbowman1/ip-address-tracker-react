import React, { useState, } from 'react'
import './App.css';
import Input from './components/Input';
import Map from './components/Map';
import Details from './components/Details';
import axios from 'axios';

function App() {

  const [ ip, setIp ] = useState({})
  const [ ipSelector, setIpSelector ] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()

    axios.get(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_b7xgO8YbkryVNNJkhTe4Ty50r9UiY&ipAddress=${ipSelector}`)
        .then(res => {
            console.log(res.data)
            setIp(res.data)
        })
        .catch(err => console.log(err))
}


  return (
      <div>
      <Input 
        ipSelector={ipSelector}
        setIpSelector={setIpSelector}
        submitHandler={submitHandler}
      />
      <Map
      ip={ip}
      />
      <Details
      ip={ip}
      />
      
      </div>
  );
}

export default App;
