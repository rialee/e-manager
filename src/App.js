import React from "react";
import ResultContainer from "./components/ResultContainer";
import "./styles/App.css";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";


function App() {

  return (

    <>
    
      {/* jumbotron header */}
      <Header />

      {/* search input */}
      <SearchInput />

      {/* result container */}
      <ResultContainer />

    </>
  )
};

export default App;
