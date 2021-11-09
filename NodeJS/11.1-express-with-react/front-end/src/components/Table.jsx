import React from 'react'
import './Table.css'
import TableItem from './TableItem'
export default function Table({ items, deleteItem }) {

  return (
    <table id="customers">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
          <th>ID</th>
          <th>Delete</th>
        </tr>
      </thead>

      {

        items.length === 0 ? null : (
          <tbody>
            {items.map(item => {
              return <TableItem deleteItem={deleteItem} key={item.id} item={item}></TableItem>
            })}
          </tbody>
        )

      }

    </table>
  )
}
