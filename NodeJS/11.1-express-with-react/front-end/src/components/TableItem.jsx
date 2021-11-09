import React from 'react'

export default function TableItem({item,deleteItem}) {
    return (
    <tr key={item.id}>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td>{item.id}</td>
    <td style={{textAlign:'center'}}><i className="fa fa-trash" style={{cursor:'pointer'}} onClick={()=>deleteItem(item.id)}></i></td>
  </tr>
    )
}
