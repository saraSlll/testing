import React, { useState } from "react";
import Search from "./Search";
import UserTableByClient from "./usersTableByClient";

export default function UserTable(props)
{
    const users = props
    console.log(users)
    const[ name , setName]  = useState('')
    const[ email , setEmail]  = useState('')

    function filterByName(e)
    {
        setName(e);
    }
  
    function filterByEmail(e)
    {
     setEmail(e);
    }
    
    return(
        <>
        <Search 
        setName = {filterByName}
        setEmail = {filterByEmail}
        ></Search> 
        <UserTableByClient users={users} 
        filterByName={name} filterByEmail={email}
        ></UserTableByClient>
        </>
    )
}