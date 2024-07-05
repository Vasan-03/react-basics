import React, { useState } from 'react'

const Inputverification = () => {
    const[number,setNumber]=useState("")
    const handleclick=(event)=>{
        setNumber(
            event.target.value
        )}
  const verification=() =>{
    try{
      if(number=="")throw "please enter a number";
      if(isNaN(number)) throw "its not a number";
    }
    catch(error){
       document.getElementById("vasan").innerHTML=error;
    }
}
  return (
    <>
    <label>MOBILE_NUMBER:
    < input type="text" onChange={handleclick}/>
    <h1 id="vasan" style={{color:"red"}}></h1>
    </label>
    <button onClick={verification}>CLIck</button>
    </>
  )
}

export default Inputverification