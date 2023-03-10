import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false, 
    msg:'', 
    type:''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name){
      showAlert(true, 'please Enter an Item', 'danger');
    }
    else if (name && isEditing){
      //deal with edit
    }
    else{
      showAlert(true, 'item added',  'success')
      const newItem = { id: new Date().getTime().toString, title: name };
      setList([...list, newItem]);
      setName('');
    }
  }
  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type })
  };
  const clearList = () => {
    showAlert(true,'list emptied','danger');
    setList([]);
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  }
  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger')
    const filterItem = list.filter((item) => item.id !== id) 
    setList(filterItem);
  }
  return (
  <section className='section-center'>
    <form className='glocery-form' onSubmit={handleSubmit}>
      {
        alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />
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
          { isEditing ? 'edit' : 'submit'}
        </button>
      </div>
    </form>
    { list.length > 0 && 
    (
    <div className='glocery-contianer'>
      <List items={list} removeItem={removeItem} editItem={editItem} />
      <button 
        className='clear-btn'
        onClick={clearList}
      >
        clear items
      </button>
    </div>
    )
    }
  </section>
)
}

export default App;
