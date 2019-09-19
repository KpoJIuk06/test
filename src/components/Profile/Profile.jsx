import React from 'react';
import s from './MyPosts/MyPosts.module.css';
import e from './MyPosts/MyPost.module.css';
import MyPosts from "./MyPosts/Myposts";
import slider from "./SliderBar/SlideBar";


const Profile =()=>{
   return <div className={s.content}>
       <slider/>
       <MyPosts/>
    </div>

};



export default Profile;