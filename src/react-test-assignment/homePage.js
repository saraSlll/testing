import React from "react";
import Users from './users';

export default function HomePage()
{
    function sortByName(e)
   {

   }
   function sortByEmail()
   {

   }
    return(
        <>
        <Users></Users>
        <input type={'text'} placeholder="sort by email" onKeyPress={sortByName()} ></input>
        <input type={'text'} placeholder="sort by user name" onKeyPress={sortByName()} ></input>

        </>
    )
}