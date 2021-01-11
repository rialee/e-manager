import React from "react";
import "./style.css";
import API from "../../utils/API";
import Result from "../Result";

// main display on app page
class ResultContainer extends React.Component {

    // state initial (schema for changes)
    state = {
        allUsers: [],
        filteredUsers: [],
        searchInput: "",
        sortOptions: ""
    };

    // component did mount
    componentDidMount() {
        // call API funcition in utils folder
        API.getUsers()
            .then(res => {

                // set up new state (setState)
                this.setState({

                    // allUsers: []
                    allUsers: res.data.results,

                    // filteredUsers: []
                    filteredUsers: res.data.results
                });
            });
    };


    // handleInputChange 
    handleInputChange = (e) => {

        console.log(e.target);
        const { name, value } = e.target;

        // setState searchInput
        this.setState(
            {
                [name]: value

            },

            () => {

                // filter users by every letter entered in searchInpu
                const filteredResult = this.state.allUsers
                    .filter((res) => res.name.first.includes(this.state.searchInput));

                this.setState(
                    {
                        filteredUsers: filteredResult,
                    }
                );
            }
        );

    };




    // sort users display on page
    HandleSortResult = (e) => {

        e.preventDefault();

        // use js to sort (by string, sortOptions: by name, DOB etc.)
        // ascending/decending 
        if (this.state.sortOptions !== "ascending") {

            console.log("sorting...!");

            const sorted = this.state.allUsers.sort((a, b) => a.name.first.localeCompare(b.name.first));

            // setting state - ascending
            this.setState({
                filteredUsers: sorted,
                sortOptions: "ascending"
            });
        }

        else {

            const sorted = this.state.allUsers.sort((a, b) => b.name.first.localeCompare(a.name.first))

            // setting state - descending
            this.setState({
                filteredUsers: sorted,
                sortOptions: "descending"
            })
        };
    };


    render() {
        return (
            <div className="Result">

                {/* search bar */}
                <nav className="navbar navbar-light bg-light mx-auto" style={{ height: "100px" }}>

                    <form className="form-inline">
                        <input className="form-control mr-sm-2" name="searchTerm" type="text" placeholder="Search" aria-label="Search" onChange={this.handleSearchChange} value={this.state.searchTerm}></input>
                    </form>
                    <button className="btn-light sort" onClick={this.handleSubmit}>Sort by name</button>
                </nav>

                {/* result display table */}
                <div className="row">
                    
                    <div className="table-title col-2">Photo</div>
                    <div className="table-title click col-3" onClick={this.handleSubmit}>Name:</div>
                    <div className="table-title col-3">Phone:</div>
                    <div className="table-title col-3">Email:</div>
                    <div className="table-title col-2">Birthday:</div>
                </div>

                <Result results={this.state.filteredUsers} />

            </div>
        );
    }
}

export default ResultContainer;