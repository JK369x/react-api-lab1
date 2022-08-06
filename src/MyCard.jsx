import React from 'react'
import './MyCard.css';

function MyCard(props) {
  return (
    <>
      <div className="card">
        <img src={props.coverimage} alt={props.name} style={{width: "100%"}} />
        <div className="container">
          <br></br><h4><b>{props.name}</b></h4><br></br>
          <p>{props.detail}</p>
        </div>
      </div>
    </>
  )
}

export default MyCard