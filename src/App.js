import React from "react";
import './App.css';

// searchInput function () - component
  // return JSX

// resultDisplay function (props) - component
  // props: users (filteredUsers)
  // button to filter by name 
    // onClick will this.sortedUsers

  // return JSX

// main app home page
class App extends React.Component {

  // state initial (schema for changes)
  state ={
    allUsers:[],
    filteredUsers: [],
    searchInput: "",
    sortOption: ""
  }

  // component did mount
    // call API funcition in utils folder
      // set up new state (setState)
        // allUsers: []
        // filteredUsers: []

  // handleInputChange 
    // setState searchInput
    // filter users by every letter entered in searchInput
    // sort if relevant

  // sortedUsers display on page
    // use js to sort (by string, sortOptions: by name, DOB etc.)
    // ascending/decending 

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
