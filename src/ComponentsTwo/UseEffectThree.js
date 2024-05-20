import React, { useEffect, useState } from 'react'

const URL = "https://jsonplaceholder.typicode.com/users";

function UseEffectThree() {
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState({status:false, msg:''})

    const usersFetchData = async (apiURL)=>{
        setLoading(true)
        setIsError({status:false,msg:''})
      try {
        const response = await fetch(apiURL)
        const data = response.json()
        setUsersData(data)
        setLoading(false)
        setIsError({status:false,msg:''})
        if(response === 404){
            throw new Error('Data Not Found')
        }
      } catch (error) {
        setLoading(false)
        setIsError({status:true, msg: error.message || 'Something Went Wrong. Please dtry agig!'})
      }
    }
    useEffect(()=>{
        usersFetchData(URL)
    },[])

    if(loading){
        return <h3>Loading...</h3>
    }
    if(isError?.status){
        return(
            <h3>{isError?.msg}</h3>
        )
    }
  return (
    <div>
        <h1>UseEffectThree</h1>
        <ul>
            {
                usersData.map((eachUser)=>{
                    const {id, name, email, phone, website} = eachUser
                    return(
                        <li key={id}>
                            <h2>{name}</h2>
                            <h3>{email}</h3>
                            <p>{phone}</p>
                            <p>{website}</p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default UseEffectThree