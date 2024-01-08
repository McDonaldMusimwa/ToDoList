
import { Fragment, useState, useEffect } from 'react';
import './App.css';
import './styles.css';
import ToDoList from './components/ToDoList';
import EnterItem from './components/EnterItem';

function App() {
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem('items');
    if (localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))

  }, [items])

  const additem = (title) => {

    setItems((currentlist) => { return [...currentlist, { id: crypto.randomUUID(), title, completed: false }] })

  }


  const checkToDoStatus = (id, completed) => {
    setItems(currentitems => {
      return currentitems.map(item => {
        if (item.id == id) {

          return { ...item, completed }
        }
        return item
      })
    })
  }

  const deleteItem = (id) => {

    setItems((currentitems) => {
      return currentitems.filter((item) => item.id !== id)
    })
  }
  return (
    <Fragment>
      <EnterItem SubmitItem={additem} />

      <ToDoList items={items} deleteItem={deleteItem} checkToDoStatus={checkToDoStatus} />
    </Fragment>
  )
}

export default App
