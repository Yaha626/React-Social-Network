import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
   return <div className={s.content}>
   <div>
    <img src="http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01-1024x640.jpg"></img>
    </div>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkEv-qnBqsUcDsmv7YgbjYzI1v0kdkQ404A0QuQ6EgXjWiXQ6z"></img>
      ava + description
    </div>
    <MyPosts />
</div>
}

export default Profile