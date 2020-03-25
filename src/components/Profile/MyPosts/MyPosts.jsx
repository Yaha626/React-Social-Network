import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {
            ID: 1,
            message: "Hi, how are you?",
            likesCount: 30
        },
        {
            ID: 2,
            message: "It's my first post",
            likesCount: 3
        },
        {
            ID: 3,
            message: "Sveta murmuzetta",
            likesCount: 78
        }

    ]

    let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea ></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>


                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts

