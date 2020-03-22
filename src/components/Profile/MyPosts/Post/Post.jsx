import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return <div className={s.content}>
    
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9MvvCu2uZUeq_EYdsKE132cebunludxEJniucd8ejNSIp3TWP" />
                {props.message}
                <div>
                    <span>Like {props.likeCount}</span>
                </div>
                </div>        
        </div>  
}

export default Post

