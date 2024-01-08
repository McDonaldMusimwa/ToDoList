import {useState} from 'react';
import PropTypes from 'prop-types';

const EnterItem = ({SubmitItem}) => {
    const [item, setItem] = useState('');
    const addItem = (e) => {
        e.preventDefault()
        if(item==="") return
        SubmitItem(item)
        setItem('');
      }
    
      const additemHandler = (event) => {
        setItem(event.target.value)
      }
    
  return (
    <form className='new-item-form' onSubmit={addItem}>
    <div className='form-row'>
      <label htmlFor='item'>New Item</label>
      <input value={item} type='text' id='item' onChange={additemHandler} ></input>
    </div>
    <button className='btn' onClick={addItem}>Add Item</button>



  </form>
  )
}

EnterItem.propTypes = {
    SubmitItem:PropTypes.func
}

export default EnterItem