import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts =()=>{
   return(
       <div className={s.ava}>
    <Post message='Payment'/>
    <Post message='Maps'/>
</div>  )
};



export default MyPosts;