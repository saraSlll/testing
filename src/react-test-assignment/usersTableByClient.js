import React, { useEffect, useState } from "react";
import UserRow from "./userRow";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function UserTableByClient(props) {
    const { users, filterByName, filterByEmail } = props;
    
  
 return (
        <>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table"> 
        <TableHead>
          <TableRow>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="left">name&nbsp;</StyledTableCell>
            <StyledTableCell align="left">email&nbsp;</StyledTableCell>
            <StyledTableCell align="left">company name&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
                            users.users&&
                            users.users.map((user) => {
                                if(user.name.indexOf(filterByName) != 0){return;}
                                if(user.email.indexOf(filterByEmail)!=0){return;}
                                   return <UserRow key={user.id} user = {user}/>
                            })
                            }
        </TableBody>
        </Table> 
        </TableContainer>         
           </>

    )
}

