import React, { useState } from 'react'

const data = [
    {
        id: 1,
        name: 'jagadeesh',
        email: 'jagan@gmail.com',
        body: 'jdljladjlafl;alkdsflkasjf;lajfd;ljalfjaldfjlsajf;lsadjf;l'
    },
    {
        id: 2,
        name: 'jagadeesh',
        email: 'jagan@gmail.com',
        body: 'jdljladjlafl;alkdsflkasjf;lajfd;ljalfjaldfjlsajf;lsadjf;l'
    },
    {
        id: 3,
        name: 'jagadeesh',
        email: 'jagan@gmail.com',
        body: 'jdljladjlafl;alkdsflkasjf;lajfd;ljalfjaldfjlsajf;lsadjf;l'
    },
    {
        id: 4,
        name: 'jagadeesh',
        email: 'jagan@gmail.com',
        body: 'jdljladjlafl;alkdsflkasjf;lajfd;ljalfjaldfjlsajf;lsadjf;l'
    },
    {
        id: 5,
        name: 'jagadeesh',
        email: 'jagan@gmail.com',
        body: 'jdljladjlafl;alkdsflkasjf;lajfd;ljalfjaldfjlsajf;lsadjf;l'
    },
    {
        id: 6,
        name: 'jagadeesh',
        email: 'jagan@gmail.com',
        body: 'jdljladjlafl;alkdsflkasjf;lajfd;ljalfjaldfjlsajf;lsadjf;l'
    },
    {
        id: 7,
        name: 'jagadeesh',
        email: 'jagan@gmail.com',
        body: 'jdljladjlafl;alkdsflkasjf;lajfd;ljalfjaldfjlsajf;lsadjf;l'
    },
    {
        id: 8,
        name: 'jagadeesh',
        email: 'jagan@gmail.com',
        body: 'jdljladjlafl;alkdsflkasjf;lajfd;ljalfjaldfjlsajf;lsadjf;l'
    },
    {
        id: 9,
        name: 'jagadeesh',
        email: 'jagan@gmail.com',
        body: 'jdljladjlafl;alkdsflkasjf;lajfd;ljalfjaldfjlsajf;lsadjf;l'
    },

]

// const initialObj = {
//     name: 'jagadeesh',
//     lastName: 'Bheemala',
//     age:27
// }

function initialData(){
    return{
        name: 'jagadeesh',
        lastName: 'Bheemala',
        age:27
    }    
}

function Profile() {

    const [count, setCount] = useState(0)
    const increment = () => {  
    setCount((prevCount)=>{
        return prevCount + 1
    })
    // setCount((prevCount)=>{
    //     return prevCount + 1
    // })
    setCount((prevCount)=> prevCount + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    // const [name, setName] = useState(initialObj)
        const [name, setName] = useState(initialData)
    const changeName = () => {
        setName({
            ...name,
            name: 'jai'
        })
    }
    const changeLastName = () => {
        setName({
            ...name,
            lastName: 'B'
        })
    }

  return (
    <main className='container'>
        <ul className='comments-container'>
            {
                data.map((eachComment)=>{
                    const {id, name, email, body} = eachComment
                    return<ListItem key={id} id={id} name={name} email={email} body={body} />
                })
            }
        </ul>
        <button onClick={decrement }>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>


        <div>
            <h1>My name is {name.name}</h1>
            <button onClick={changeName}>Change firstName</button>
            <h2>My surName is {name.lastName}</h2>
            <button onClick={changeLastName}>Change lastName</button>
            <h3>My age is {name.age}</h3>
        </div>

    </main>
  )
}

const ListItem = ({id, name, email, body}) =>{
    // const {id, name, email, body} = props

    function clickHandle (e, firstName){
        console.log("hi hello namaste", e, firstName)
    }

    return(
       <>
        <li className='comment'>
            <div className="comments-header">
                <h3 className="email">{email}</h3>
                <h3 className="name">{name}</h3>
            </div>
            <div className="message">{body}</div>
        </li>
        <button onClick={function(e){
            return clickHandle(e, 'jagadeesh')
        }}>ClickMe</button>
       </>

        
    )
}

export default Profile