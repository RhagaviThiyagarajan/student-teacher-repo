import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(name, rank, EnrollmentNo, dateOfExamination, status) {
  return { name, rank, EnrollmentNo, dateOfExamination, status};
}

const rows = [
  createData('John', 1, 18908424, "2 march 2022", "delivered"),
  createData('Casandra', 2, 18908425, "3 march 2022", "approved"),
  createData('Eclair', 3, 18908426, "4 march 2022", "Pending"),
  createData('Cupcake', 4, 18908427, "4 march 2022","approved"),
  createData('jessica', 5, 18908428, "4 march 2022", "Pending"),
];
const makeStyle=(status)=>
{
    if(status==='Approved')
    {
        return{
            background:'rgb(145 254 159/47%)',
            color:'green',
        }
    }
    else
    {
        if(status==='Pending')
        {
            return{
                background:'#ffadad8f',
                color:'red',
            }
        }
        else{
            return{
                background:'#59bfff',
                color:'white',
            }
        }
    }
}

export default function BasicTable() {
  return (
    <div className="Table">
    <TableContainer component={Paper}
    style={{
        boxShadow:'0px 13px 20px 0px #80808029'
    }}>
        <h3>Recent logged in students</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
       
            <TableCell align="left">name</TableCell>
            <TableCell align="left">rank</TableCell>
            <TableCell align="left"> EnrollmentNo</TableCell>
            <TableCell align="left"> dateOfExamination</TableCell>
            <TableCell align="left"> status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.rank}</TableCell>
              <TableCell align="left">{row.EnrollmentNo}</TableCell>
              <TableCell align="left">{row.dateOfExamination}</TableCell>
              <TableCell align="left" >
                <span className="status" style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
