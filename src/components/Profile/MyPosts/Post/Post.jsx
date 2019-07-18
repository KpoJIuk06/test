import React from 'react';
import s from './Post.module.css';
import e from './Post.module.css';

const Post =()=>{
   return <div  className={e.MainPost}>
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

};



export default Post;