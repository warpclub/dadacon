import React from "react";
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
import DadaNav from "./Components/dadaNav";
import DadaHero from "./Components/DadaHero";

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

    <Route exact path="/dada"
    element={
      <>
    <DadaNav/>
    <DadaHero/>
    </>}/>
      </Routes>
    </Router>
  )
}

export default App
