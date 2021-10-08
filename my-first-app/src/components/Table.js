import React from 'react'
import TableColumns from './TableColumns'

function Table() {
    return (
        <React.Fragment>
            <table>
                <tbody>
  <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Dist</th>
  </tr>
  <TableColumns></TableColumns>
  </tbody>
</table>
       </React.Fragment>
    )
}

export default Table
