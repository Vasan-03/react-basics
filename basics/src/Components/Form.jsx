import React, { useState } from 'react'

 const Form = () => {
    const[name,setName]=useState("")
    const[sub,setSub]=useState()

    const handleClick=(event)=>{
        setName(event.target.value)
    }
    const handleMade=(event)=>{
        setSub(name)
        event.preventDefault()
    }
  return (
    <>
    <h1>{name}</h1>
    <form onSubmit={handleMade}>
    <label>UserName:
     <input type="text" value={name} onChange={handleClick}/>
     <h1>{sub}</h1>
     <button type="submit">Submit</button>
    </label>


    </form>
    </>
  )
}

export default Form