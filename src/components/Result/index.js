import React from "react";
import "./style.css";

// SearchResult function (props) - component
function Results(props) {

  console.log(props)

  const employee = props.sortedResults

  // return JSX
  return (

    <div className="wrapper">
      {employee ? employee.map((res, index) => (

        <div className="row pd-btm" key={index}>
          <img alt="1" className="profile-pic table-title col-1" src={res.picture.medium} />
          <div className="table-title col-3">{res.name.first} {res.name.last}</div>
          <div className="table-title col-3">{res.phone}</div>
          <div className="table-title col-3">{res.email}</div>
          <div className="table-title col-2">{res.dob.date.slice(0, 10)}</div>

        </div>

      )) : "No results found"}
    </div>

  )
}


export default Results;