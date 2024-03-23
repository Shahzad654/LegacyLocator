import React from 'react'
import Home from './Components/Home/Home'
import {Routes, Route} from 'react-router-dom'
import WebCam from './Components/WebCam/WebCam';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cap" element={<WebCam/>} />
      </Routes>
    </>
  );
}

export default App
