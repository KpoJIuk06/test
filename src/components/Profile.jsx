import React from 'react';
import s from './Profile.module.css';
import e from './Post.module.css';

const Profile =()=>{
   return <div className={s.content}>
        <div>
            <img src="https://pbs.twimg.com/profile_banners/15223775/1551482440/1500x500" alt=""/>
        </div>
        <div className={s.ava}>
            ava+description
        </div>
        <div  className={e.MainPost}>
            My posts1

            <div  className={e.post1}>
                New Post1
            </div>
            <div className={s.posts}>
            <div  className={s.item}>
                Post 1
            </div>
            <div className={s.item}>
                Post 2
            </div>
        </div>
    </div>
       </div>
};



export default Profile;