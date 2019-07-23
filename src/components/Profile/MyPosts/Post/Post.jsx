import React from 'react';
import e from './Post.module.css';
import SwitchExample from './SwitchExample';

const Post =()=>{
   return (
       <div className={e.post1}>
       <img src="https://findicons.com/files/icons/1072/face_avatars/300/a02.png" alt=""/>
       <span>Post</span>
       <div>
       <span>Like</span>
       </div>
       <SwitchExample/>
               </div>
)
};



export default Post;