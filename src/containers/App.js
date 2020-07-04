import React from "react";
import "./App.css";
import Header from "../components/Header"
import Footer from "../components/Footer"
import DataContainer from "../components/DataContainer"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <DataContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
