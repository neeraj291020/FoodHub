import React from "react";
function Heading(props){
    return(
      <center> <h1 className={props.class}>{props.title}</h1></center> 
    )
}
export default Heading;