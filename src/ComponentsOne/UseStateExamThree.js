import React, { useState } from "react";

function UseStateExamThree() {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });
  const [editingItem, setEditingItem] = useState({
    id: "",
    isEditing: false,
  });
  const handleMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    let newTod = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newTod]);
    setMessage({
      text: "",
      id: "",
    });
  };
  const handleDelete = (id) => {
    let newTodos = list.filter((eachList) => {
      return eachList.id !== id;
    });
    setList(newTodos);
  };
  const changeEditState = (id) => {
    setEditingItem({
      ...editingItem,
      id: id,
      isEditing: true,
    });
    let editableItem = list.find((eachList) => eachList.id === id);
    setMessage({
      ...message,
      text: editableItem.text,
      id: editableItem.id

    })
  };
  const handleEditing = (e) =>{
    e.preventDefault()
    let newTodos = list.map((eachList)=>{
      if(eachList.id === editingItem.id){
        return{
          text: message.text,
          id: editingItem.id
        }
      }else{
        return eachList
      }
    })
    setList(newTodos)
    setMessage({
      text: '',
      id:''
    })
    setEditingItem({
      id:'',
      isEditing: false
    })
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="EnterTodos"
          value={message.text}
          onChange={handleMessage}
        />
        {editingItem.isEditing ? (
          <button onClick={handleEditing} type="submit">
            Edit
          </button>
        ) : (
          <button onClick={handleAdd} type="submit">
            ADD
          </button>
        )}
      </form>
      <hr />
      {list.length === 0 && <h4>There is no list in the Todos</h4>}
      <ul className="list">
        {list.map((eachList) => {
          const { text, id } = eachList;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => changeEditState(id)}>edit</button>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseStateExamThree;
