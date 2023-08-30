import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SubFooter from './Components/SubFooter'
import Footer from './Components/Footer'
import BakeServices from "./Components/BakeServices";
import BakeProducts from "./Components/BakeProducts";
import Chatbot from "./Components/ChatBot";
import DadaNav from "./Components/DadaNav";
import DadaHero from "./Components/DadaHero";
import Notices from "./Components/Notices";
import DadaFoot from "./Components/DadaFoot";
import Devices from "./Components/Devices";
import Device from "./Components/Device";
import Login from "./Components/Login";
import Chatroom from "./Components/Chatroom";
import Users from "./Components/Users";
import FaceRecog from "./Components/FaceRecog";

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
    <Navbar/>
    <Chatbot/>
    <Hero/>
    <BakeProducts/>
    <BakeServices/>
    <SubFooter/>
    <Footer/>
    </>}/> 

    <Route exact path="/login" element={
    <>
    <Login/>
    </>}/>

    <Route exact path="/dada"
    element={
      <>
    <DadaNav/>
    <DadaHero/>
    <Devices/>
    <DadaFoot/>
    </>}/>

    <Route exact path="/notice"
    element={
    <>
    <DadaNav/>
    <Notices/>
    {/* <DadaFoot/> */}
    </>}
    />
    <Route exact path="/device" element={<>
    <DadaNav/>
    <Device/>
    <DadaFoot/>
    </>}/>
    <Route exact path='/chat' element={<>
    <DadaNav/>
    <Chatroom/>
    <DadaFoot/>
    </>}/>
    <Route exact path='/user' element={<>
    <DadaNav/>
    <Users/>
    {/* <DadaFoot/> */}
    </>}/>
    <Route exact path='/aafia' element={<>
    <DadaNav/>
    <FaceRecog/>
    </>}/>
      </Routes>
    </Router>
  )

}

export default App
