import React from 'react';
import s from './MyPosts/MyPosts.module.css';
import e from './MyPosts/MyPost.module.css';
import MyPosts from "./MyPosts/Myposts";
import App from './PopApp'
import PaymentForm from "./creditcard/paymentcard";


const Profile =()=>{
   return <div className={s.content}>
       <MyPosts/>
       <App/>

    </div>

};



export default Profile;



