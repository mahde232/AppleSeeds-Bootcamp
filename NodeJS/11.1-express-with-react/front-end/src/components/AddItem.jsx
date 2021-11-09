import axios from 'axios'
import React, { useState } from 'react'
import './AddItems.css'
import { useNavigate } from 'react-router-dom'
const URL = 'http://localhost:4000/'
export default function AddItem({ addNewItemFromSon }) {
    const [product, setProduct] = useState({
        name: '',
        price: ''
    })
    let navigate = useNavigate()
    const handleInput = (e) => {
        e.target.style.border = ""
        setProduct((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

    }
    const handleSubmit = async (e) => {
        console.log('TEST');
        e.preventDefault();
        let flag = true;
        Object.entries(product).forEach((item, idx) => {
            if (item[1].length === 0) {
                e.target[idx].style.border = "2px solid red"
                flag = false
            }
        })
        if (flag) {
            //Post Axios
            const request = await axios.post(URL + 'items', product)
            if (request.status === 201) {
                addNewItemFromSon(request.data)
                navigate('/')
            }
        }

    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="pname">Product Name</label>
                <input type="text" id="pname" name="name" placeholder="product name.." onChange={e => handleInput(e)} />

                <label htmlFor="price">Product Price</label>
                <input type="text" id="price" name="price" placeholder="product price.." onChange={e => handleInput(e)} />

                <input type="submit" value="Submit" />
            </form>

        </div>

    )
}
