import React, { useEffect, useState } from "react";
export default function PostsList(props)
{
    const {posts} = props;
    useEffect(()=>{
    }, [] )
    console.log(posts , "sh")
    return(
        <>

         {
        (posts?.length>0) &&
        (posts.map((post ) =>{
            return( 
                <>
            <label  key="{post,title}" style={{color:'blue'}}>{post.title}</label>
            <p  key="{post.body}" >{post.body}</p>
            </>
            )
        }))}

        </>
    )
}