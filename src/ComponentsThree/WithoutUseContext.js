import React, { useState } from 'react'


// without useContext Hook Example
function UseContextOne() {
    const [userDetails, setUserDetails] = useState({
        firstName: 'jagadeesh',
        lastName: 'Bheemala',
        email: 'jagadeesh555.bj@gmail.com'
    })
  return (
    <div>
        <h1>Use Context Example</h1>
        <ChildComponent userDetails={userDetails} />
    </div>
  )
}

const ChildComponent = (props) => {
    return(
        <div>
            <h2>Child Components</h2>
            <GrandChildComponents userDetails={props.userDetails} />
        </div>
    )
}

const GrandChildComponents = ({userDetails}) => {
    return(
        <div>
            <h3>GrandChildComponents</h3>
            <h4>FirstName: {userDetails.firstName}</h4>
            <h4>LatName: {userDetails.lastName}</h4>
            <h4>Email: {userDetails.email}</h4>
        </div>
    )
}

export default UseContextOne