import React, { useState } from 'react'

function UseStateExamTwo() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    // const changeName = (e) => {
    //     setName(e.target.value)
    // }
    // const changeEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const changePassword = (e) => {
    //     setPass(e.target.value)
    // }

    const inputHandleChange = (e, names) =>{
        if(names === 'name'){
            setName(e.target.value)
        }else if(names === 'email'){
            setEmail(e.target.value)
        }else if(names === 'pass'){
            setPass(e.target.value)
        }
    }
    const changeSubmit = (e) => {
        e.preventDefault()
        let userDetails = {
            name: name,
            email:email,
            pass:pass
        }
        console.log(userDetails)
    }

  return (
    <div>
       <form onSubmit={changeSubmit}>
       <div className="content">
            <input type="text" name="name" id="name" placeholder='EnterName' value={name} onChange={(e)=>inputHandleChange(e,'name')} />
        </div>
        <div className="content">
            <input type="email" name="email" id="email" placeholder='EnterEmail' value={email} onChange={(e)=>inputHandleChange(e,'email')} />
        </div>
        <div className="content">
            <input type="password" name="pass" id="pass" placeholder='EnterPass' value={pass} onChange={(e)=>inputHandleChange(e,'pass')} />
        </div>
        <button>Submit</button>
       </form>
    </div>
  )
}

export default UseStateExamTwo