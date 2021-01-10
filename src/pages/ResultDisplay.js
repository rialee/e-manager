import React from "react";
import "../styles/App.css";
import API from "../utils/API.js"
import Header from "../components/Header"

// main display on app page
class ResultDisplay extends React.Component {

    // state initial (schema for changes)
    state = {
        allUsers: [],
        filteredUsers: [],
        searchInput: "",
        sortOption: ""
    };

    // component did mount
    componentDidMount() {
        // call API funcition in utils folder
        API.getUsers().then(employees => {

            // set up new state (setState)
            this.setState({

                // allUsers: []
                allUsers: employees.data.results,

                // filteredUsers: []
                filteredUsers: employees.data.results
            });
        });
    }


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

                <Header />
                {this.state.allUsers.length > 0 &&
                    <ResultDisplay exployees={this.state.allUsers} />
                }
            </div>
        );
    }
}

export default ResultDisplay;