import axios from 'axios'
import React, { useState } from 'react'
import './AddStudent.css'
import { useNavigate } from 'react-router-dom'

const URL = 'http://localhost:4000/'
export default function AddStudent({ informFatherOfNewStudent }) {
    let navigate = useNavigate()
    const [student, setStudent] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleInput = (e) => {
        e.target.style.border = ""
        if (e.target.name === 'age') {
            e.target.value = e.target.value.replace(/\D/g, '')
        }
        setStudent((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let flag = true;

        Object.entries(student).forEach((item, idx) => {
            if (item[1].length === 0) {
                e.target[idx].style.border = "2px solid red"
                flag = false
            }
        })
        if (flag) {
            const request = await axios.post(URL + 'students', student)
            if (request.status === 200) {
                informFatherOfNewStudent(request.data)
                navigate('/')
            }
        }
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="pname">Student Name</label>
                <input type="text" name="name" placeholder="Student name" onChange={e => handleInput(e)} />

                <label htmlFor="price">Student Age</label>
                <input type="text" name="age" placeholder="Age" onChange={e => handleInput(e)} />

                <label htmlFor="price">Student Email</label>
                <input type="text" name="email" placeholder="Email" onChange={e => handleInput(e)} />

                <input type="submit" value="Submit" />
            </form>

        </div>

    )
}
