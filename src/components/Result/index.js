import React from "react";
import "./style.css";

// SearchResult function (props) - component
function Results(props) {

  console.log(props)

  const employee = props.results

  // return JSX
  return (

    <div className="wrapper">
      { employee ? employee.map((result, index) => (
        <div className="row pd-btm" key={index}>
          <img alt="1" className="profile-img table-title col-1" src={result.picture.large} />
          <div className="table-title col-3">{result.name.first} {result.name.last}</div>
          <div className="table-title col-3">{result.phone}</div>
          <div className="table-title col-3">{result.email}</div>
          <div className="table-title col-2">{result.dob.date.slice(0, 10)}</div>

        </div>

      )) : "Loaging..."}
    </div>
  )

}


export default Results;