import React from 'react'
import './Table.css'
import TableItem from './TableItem'
export default function Table({ students, informFather }) {
  return (
    <table id="customers">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      {
        students.length === 0 ? null : (
          <tbody>
            {students.map(student => {
              return <TableItem key={student._id} student={student} informFather={informFather}></TableItem>
            })}
          </tbody>
        )
      }
    </table>
  )
}
