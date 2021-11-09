import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from './components/Table'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItem from './components/AddItem';

const URL = 'http://localhost:4000/'
export default function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getAllItems = async () => {
      const request = await axios.get(URL + 'items')
      if (request.status === 200)
        setItems(request.data)
      else
        console.log('Error Fetching Data', request);
    }
    getAllItems()
  }, [])

  const addNewItem = (newItem) => {
    setItems([...items, newItem])
  }
  const deleteItem = async (id) => {
    const request = await axios.delete(URL + `items/${id}`)
    if (request.status === 200) {
      setItems(items.filter(item => item.id !== id))
    }
  }
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Table deleteItem={deleteItem} items={items}/>} />
          <Route path="/add" element={<AddItem addNewItemFromSon={addNewItem}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
