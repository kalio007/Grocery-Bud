import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: true, 
    msg:'helllo', 
    type:'success'
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name){
      // dispaly alert
    }
    else if (name && isEditing){
      //deal with edit
    }
    else{
      //show alert
      const newItem = { id: new Date().getTime().toString, title: name };
      setList([...list, newItem]);
      setName('');
    }
  }
  return (
  <section className='section-center'>
    <form className='glocery-form' onSubmit={handleSubmit}>
      {
        alert.show && <Alert {...alert} />
      }
      <h3>grocery bud</h3>
      <div className='form-control'>
        <input 
          type='text' 
          className='grocery'
          placeholder='exmaple: egg'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type='submit' className='submit-btn'>
          {isEditing ? 'edit' : 'submit'}
        </button>
      </div>
    </form>
    { list.length > 0 && 
    (
    <div className='glocery-contianer'>
      <List items={list} />
      <button className='clear-btn'>
        clear items
      </button>
    </div>
    )
    }
  </section>
)
}

export default App;
