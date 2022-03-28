import React, { useRef, useState } from "react";
import { TextField } from "@mui/material";
export default function Search(props)
{
    let {setName , setEmail}  = props
    function filterByName(e)
    {
    setName(e.target.value)
    }
    function filterByEmail(e)
    {
     setEmail(e.target.value)   
    }
    return(
        <form>
            <TextField id="filled-basic" label="search by name" variant="filled" onChange={filterByName} style={{marginRight:'10px'}}/>
            <TextField id="filled-basic" label="search by email" variant="filled" onChange={filterByEmail} />
        </form>

    )
}