import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './userTable';

export default function Users(){
   const [users, setUsers] = useState([]);
   const urlJson= 'https://jsonplaceholder.typicode.com/users'; 

    useEffect(()=>{
        const fetchData = async ()=>{
            const users_data = await (axios(urlJson));
            setUsers(users_data.data);
        };
        fetchData();
     },[])
useEffect (()=>{
  
  console.log("jhbjb" ,users)

} ,[users])
   console.log(users)
       return (
  <>
  
{  users?.length>0 &&
 <UserTable users={users}></UserTable>
}  </>
)
}