import React from 'react';
import s from './MyPosts/MyPosts.module.css';
import MyPosts from "./MyPosts/Myposts";
import App1 from './PopApp'


const Profile = () => {
    return <div className={s.content}>
        <MyPosts/>
        <App1/>
    </div>

};


export default Profile;



