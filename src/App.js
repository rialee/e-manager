import React from "react";
import ResultContainer from "./components/ResultContainer";
import "./styles/App.css";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (

    <>
      <div className="header">

        {/* jumbotron header */}
        <Header />

      </div>

      {/* result container */}
      <ResultContainer />

    </>
  )
};

export default App;
