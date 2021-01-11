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

        <div className="row" key={index}>
          <img alt="1" className="result-row employee-pic col-2" src={res.picture.large} />
          <div className="result-row col-2">{res.name.first} {res.name.last}</div>
          <div className="result-row col-2">{res.phone}</div>
          <div className="result-row col-3">{res.email}</div>
          <div className="result-row col-2">{res.dob.date.slice(0, 10)}</div>

        </div>

      )) : "No results found"}
    </div>

  )
}


export default Results;