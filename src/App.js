import React from 'react';
import Form from './Form'
import Waves from './Waves'
import  Mobile from './images/mobile.png';
import './App.scss';

const App = () => {
  return (
    <div className="Container">
      <div className="Container-image">
        <img src={Mobile} className="Mobile" alt="logo" />
      </div>
      <Waves/>
      <Form/>
    </div>
  );
}

export default App;
