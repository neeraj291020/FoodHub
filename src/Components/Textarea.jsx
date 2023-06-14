import React from "react";
import { useState } from "react";


function Textarea(){
    const [text,setText]=useState();
   function handleChange(event){
    console.log(event.target.value);
    event.preventDefault();
    setText(Number(event.target.value));
    }
    function handleClick(){
                setText(Number(text)+1);

    }
    function handleClick2(){
        setText(Number(text)-1);

}
    function handleSubmit(event){
        event.preventDefault();
    }
   
    return(<div className="container my-3">
        <center><h3 style={{marginTop:"30px"}}>Mathematical Fun🎲 For Server Checking!!</h3></center>
        <form onSubmit ={handleSubmit} className="form-floating">
  <input className="form-control is-invalid" id="floatingInputInvalid" onChange={handleChange} value={text} />
  <label for="floatingInputInvalid">Enter Number!!</label>
  <button  type="submit" onClick={handleClick} className="btn btn-primary my-3">Get Successor</button>
  <button  type="submit" onClick={handleClick2} className="btn btn-success my-3 mx-3">Get Predecessor</button>
</form>
</div>
    )
}
export default Textarea;