import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
   return <div className={s.content}>
    <div>
        my posts
        <div>
           <textarea ></textarea>
           <button>Add post</button>
           <button>Remove</button>

        </div>
        <div className={s.posts}>
            <Post message="Hi, how are you?" likeCount="5"/>
            <Post message="It's my first post" likeCount="15"/>
           
        </div>
    </div>
</div>
}

export default MyPosts

