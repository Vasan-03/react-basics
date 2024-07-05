import React,{useState} from 'react'

const MultipleInputs = () => {
    const[inputs,setInputs]=useState({
        UserName:"",
        Password:"",
        MobileNo:"" 
    })

    const handleClick=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs((prev)=>{
            return {...prev,[name]:value}
        })
       
    }
    const handleMade=(event)=>{
        event.preventDefault()
    }

    console.log(inputs)
  return (
    <>
   
    <form onSubmit={handleMade}>

    <h1>{inputs.UserName}</h1>
    <label>UserName:
     <input type="text" value={inputs.UserName} name="UserName" onChange={handleClick}/>
    </label>
    
    <h1>{inputs.Password}</h1>
    <label>Password:
     <input type="password" value={inputs.Password}  name="Password" onChange={handleClick}/>
    </label>

    <h1>{inputs.MobileNo}</h1>
    <label>Mobile No:
     <input type="number" value={inputs.MobileNo} name="MobileNo"  onChange={handleClick}/>
    </label>

    
    <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default MultipleInputs