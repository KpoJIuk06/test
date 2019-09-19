import React from 'react';
import e from './Post.module.css';


const Post =(props)=>{

   return (
       <div className={e.post1}>
       <img src="https://findicons.com/files/icons/1072/face_avatars/300/a02.png" alt=""/>
       <span>{props.message}</span>
       <div>
       <span>Like</span>
       </div>
           </div>

)
};



export default Post;