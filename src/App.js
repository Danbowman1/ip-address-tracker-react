import React, { useState } from 'react'
import './App.css';
import Input from './components/Input';
import Map from './components/Map';
import Details from './components/Details';

function App() {

  const [ ipSelector, setIpSelector ] = useState('')


  

  return (
      <div>
      <Input 
        ipSelector={ipSelector}
        setIpSelector={setIpSelector}
      />
      <Map />
      <Details />
      </div>
  );
}

export default App;
