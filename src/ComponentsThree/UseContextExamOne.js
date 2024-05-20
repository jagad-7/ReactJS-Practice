import React,{useState} from 'react'

function UseContextExam() {
    const [userDetails, setUserDetails] = useState({
        firstName: 'jagadeesh',
        lastName: 'Bheemala',
        email: 'jagadeesh555.bj@gmail.com'
    })
  return (
    <div>
        <h1>Use Context Example</h1>
    </div>
  )
}

export default UseContextExam
