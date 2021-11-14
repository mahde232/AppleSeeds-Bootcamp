import React, { useState } from 'react';
import axios from 'axios';

export default function TableItem({ student, informFather }) {
  const [isEditing, setEditing] = useState(false)
  const [studentObj, setStudent] = useState({
    _id: student._id,
    name: student.name,
    age: student.age,
    email: student.email,
  })
  const [editObj, setEditedObj] = useState({ ...student })
  
  const URL = 'http://localhost:4000'
  const deleteStudent = async (e) => {
    const response = await axios.delete(`${URL}/students/${student._id}`)
    if (response.status === 200) {
      informFather(student._id);
    }
    else console.log('Error happened in delete');
  }

  const updateBtnHandler = () => {
    setEditing(!isEditing);
  }

  const updateStudent = async (e) => {
    if (editObj['name'].length > 0 && editObj['age'].toString().length > 0 && editObj['email'].length > 0) {
      const response = await axios.put(`${URL}/students/${student._id}`, editObj)
      if (response.status === 201) {
        setEditing(false)
        setStudent(response.data.updatedStudent)
      }
    }
    else
      alert('dont leave empty fields');
  }

  const handleOnChange = (e) => {
    e.target.style.border = ""
    if (e.target.name === 'age') {
      e.target.value = e.target.value.replace(/\D/g, '')
    }
    setEditedObj((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  return (
    <tr key={studentObj._id}>
      <td>{studentObj._id}</td>
      {
        isEditing ?
          <>
            <td><input type='text' name='name' value={editObj.name} onChange={handleOnChange} /></td>
            <td><input type='text' name='age' value={editObj.age} onChange={handleOnChange} /></td>
            <td><input type='text' name='email' value={editObj.email} onChange={handleOnChange} /></td>
          </>
          :
          <>
            <td>{studentObj.name}</td>
            <td>{studentObj.age}</td>
            <td>{studentObj.email}</td>
          </>
      }
      <td style={{ textAlign: 'center' }}><i className="fa fa-trash" style={{ cursor: 'pointer' }} onClick={deleteStudent}></i></td>
      {
        isEditing ?
          <td><input type='button' value='Done' onClick={updateStudent} /><input type='button' value='Cancel' onClick={updateBtnHandler} /></td>
          :
          <td style={{ textAlign: 'center' }}><i className="fa fa-edit" style={{ cursor: 'pointer' }} onClick={updateBtnHandler}></i></td>
      }
    </tr>
  )
}
