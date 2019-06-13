import React from 'react';
import './Profile.css';

const Profile =()=>{
   return <div className='content'>
        <div>
            <img src="http://theperfectlight.com/wp-content/uploads/2017/01/Light-Pollution.png" alt=""/>
        </div>
        <div>
            ava+description
        </div>
        <div>
            My posts1

            <div>
                New Post1
            </div>
            <div className='posts'>
            <div  className='item'>
                Post 1
            </div>
            <div className='item'>
                Post 2
            </div>
        </div>
    </div>
       </div>
};



export default Profile;