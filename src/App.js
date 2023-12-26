import './App.css';
import Header from "./components/header";
import Questions from "./components/questions"; 
import Packages from "./components/packages"; 
import Prof from "./components/prof"; 
import Footer from "./components/footer"; 
import React from 'react';

function App() {
  return (
    <>
        <main className="main">
            <Header/>
            <Questions/>
            <Packages/>
            <Prof/>
            <Footer/>
        </main>
    </>
  );
}

export default App;
