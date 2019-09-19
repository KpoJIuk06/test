import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts =()=>{
   return(
       <div className={s.ava}>
    <Post message='Hi, how are you?'/>
    <Post message='Hi, how are you?2'/>
</div>  )
};



export default MyPosts;