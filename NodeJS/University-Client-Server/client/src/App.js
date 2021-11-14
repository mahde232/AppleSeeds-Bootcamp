import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from './components/Table'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudent from './components/AddStudent';

const URL = 'http://localhost:4000/'
export default function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const getAllStudents = async () => {
      const request = await axios.get(URL + 'students')
      if (request.status === 200)
        setStudents(request.data)
      else
        console.log('Error Fetching Data', request);
    }
    getAllStudents()
  }, [])

  const getWhichStudentWasDeletedFromSon = (idOfDeleted) => {
    console.log('father informed, deleted=', idOfDeleted);
    const updatedStudentsList = students.filter(student => {
      if (student._id !== idOfDeleted)
        return true;
      return false;
    })
    setStudents(updatedStudentsList);
  }

  const addNewStudent = (studentObj) => {
    setStudents([...students, studentObj])
  }

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Table students={students} informFather={getWhichStudentWasDeletedFromSon} />} />
          <Route path="/add" element={<AddStudent informFatherOfNewStudent={addNewStudent} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
