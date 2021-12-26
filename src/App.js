import React from "react";


import './App.css';
import Adresse from "./Componets/Profile/Adresse";
import FullName from "./Componets/Profile/FullName";
import PhotoProfil from "./Componets/Profile/PhotoProfil";

function App() {
  return (
    <div className="App">
      <div className = "container">
        <PhotoProfil/>
        <FullName/>
         <Adresse/>
   </div>
    </div>
  );
}

export default App;


