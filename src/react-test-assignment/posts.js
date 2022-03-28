import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostsList from './postsList';
import AddPost from './addPost';

export default function Posts(props){
   const [posts, setPosts] = useState([]);
   const {userId} = props;
      const [urlJson, setUrl]= useState('https://jsonplaceholder.typicode.com/posts?userId='+userId); 

      function addPost(post)
      {
         debugger

         setPosts(posts => [...posts, post]);

      }
    useEffect(()=>{
      if(userId == 0)
      setUrl('https://jsonplaceholder.typicode.com/posts')      
        const fetchData = async ()=>{
            const posts_data = await (axios(urlJson));
            setPosts(posts_data.data);
        };
        fetchData();
     },posts)    
     console.log("p" , posts)
return (
            <>
                      <AddPost setPosts = {addPost} userId ={userId}></AddPost>
                     <PostsList  posts ={posts} ></PostsList>
            </>
)
  }

