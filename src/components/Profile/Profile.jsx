import React from 'react';
import s from './MyPosts/MyPosts.module.css';
import e from './MyPosts/MyPost.module.css';
import MyPosts from "./MyPosts/Myposts";

const Profile =()=>{
   return <div className={s.content}>
        <div>
            <img src="https://pbs.twimg.com/profile_banners/15223775/1551482440/1500x500" alt=""/>
        </div>
       <div>ava+description</div>
        <div className={s.ava}>
            <button className={e.content}>Push</button>
        </div>
       <MyPosts/>

    </div>

};



export default Profile;