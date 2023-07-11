import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Assets/Components/Login";
import SignupPage from "./Assets/Components/signup";
// import Home from "./Assets/Components/Home/Home";


function App()
{
  return(
    <div className="App">
   <BrowserRouter>
    <Routes>
    
        {/* { <Route path="/home" element={<Home/>}/> } */}
        <Route path="/REG" element={<SignupPage/>}/>
        <Route path="/" element={<LoginPage/>}/>
  
    </Routes>
   </BrowserRouter>

    </div>
  );
}
export default App
