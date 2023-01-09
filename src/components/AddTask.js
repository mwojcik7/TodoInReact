import React, { useState } from 'react';

import './AddTask.css'

const AddTask = ({ add }) => {
  const now = new Date().toISOString().slice(0,10)

  const [text, setText] = useState('')
  const [checked, setChecked] = useState(false)
  const [date, setDate] = useState(now)

  const handleChangeDate = e => {
    setDate(e.target.value)
  }

  const handleChangeText = e => {
    setText(e.target.value)
  }

  const handleClick = () => {

    if(text.length > 2) {
      if(add(text, date, checked)) {
        setDate(now)
        setText('')
        setChecked(false)
      }
    } else {
      alert("Name is too short")
    }
      
  }

  return (
    <div className="form">
      <input type="text" placeholder="Add task" value={text} onChange={handleChangeText} />
      <div>
        <label htmlFor="date">Finish date</label>
        <input type="date" id="date" value={date} min={now} onChange={handleChangeDate} />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
 
export default AddTask;