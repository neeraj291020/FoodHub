import React from "react";

function Card(props){
   
    return (
            <>
            <div className="hello">
            <div className={props.class} style={{width: "18rem"}}>
  <img src={props.imgSource} className="card-img-top" alt="Random Image"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> <strong>Name:</strong>{props.name}</li>
    <li className="list-group-item"><strong>Price:</strong>{props.price}</li>
    <li className="list-group-item"><strong>ProductID:</strong>{props.productID}</li>
  </ul>
</div>
</div>
            </>
    )
}
export default Card;