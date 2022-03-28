import React, { useState } from "react";
import BasicModal from "./BasicModel";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Redirect from 'react-router-dom'

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


export default function UserRow(props)
{

    const { id, user} = props;

    return(
        <>
<StyledTableRow key={id}>
<StyledTableCell component="th" scope="user">

<BasicModal user={user}></BasicModal>
</StyledTableCell>
<StyledTableCell align="left">{user.name}</StyledTableCell>
<StyledTableCell align="left">{user.email}</StyledTableCell>
<StyledTableCell align="left">{user.company.name}</StyledTableCell>
</StyledTableRow>


        </>
    )
}

