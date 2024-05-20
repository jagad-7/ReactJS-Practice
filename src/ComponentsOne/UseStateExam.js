import React, { useState } from "react";

function UseStateExam() {
  const [showData, setShowData] = useState(false)
  const changeContent = () => {
    setShowData(!showData)
  }
  return (
    <div>
  {/* {
    showData && (
      <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
      provident corporis vitae, ut libero omnis consectetur facere ab veniam
      ratione ea ipsum aliquid autem, error sit veritatis et commodi? A?</p>
    )
  } */}

  {/* another way */}

  {showData ? (
      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sint dolorum eveniet enim quis delectus, odit cum excepturi, voluptatem voluptas veniam amet alias quibusdam odio repellendus esse nostrum! Id, quis!</div>
    ):(
    <h3>data is hiden</h3>)
  }

      <button onClick={changeContent}>{showData ? 'hide' : 'show'}</button>
    </div>
  );
}

export default UseStateExam;
