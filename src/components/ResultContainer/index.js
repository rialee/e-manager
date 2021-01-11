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
        sortOptions: "",
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
                const filteredResult = this.state.allUsers.filter(
                    (res) => res.name.first.toLowerCase().startsWith(this.state.searchInput.toLocaleLowerCase())
                );

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

            <div className="Result wrapper">

                {/* search bar */}
                <form className="search-block">



                    <input className="search-form" name="searchInput" type="text" aria-label="Search" onChange={this.handleInputChange} value={this.state.searchInput} placeholder="Enter Name Here"></input>

                    {/* search button */}
                    <button className="btn-light sort" onClick={this.HandleSortResult}>Sort by name</button>

                </form>



                <div className="wrapper result-container">
                    
                    {/* result display table */}
                    <div className="row title-row">

                        <div className="title col-2"></div>
                        <div className="title click col-2" onClick={this.HandleSortResult}>Name:</div>
                        <div className="title col-2">Phone:</div>
                        <div className="title col-3">Email:</div>
                        <div className="title col-2">Birthday:</div>

                    </div>


                    <Result sortedResults={this.state.filteredUsers} />
                </div>

            </div>
        );
    }
}

export default ResultContainer;