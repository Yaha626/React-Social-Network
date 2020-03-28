import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return <div className={s.content}>
    
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5VASsoNUMw5P7fm1O_2NDlgLAz98R-xwrQYG-oUEinFMc8aDr" />
                {props.message}
                <div>
                    <span>Like {props.likesCount}</span>
                </div>
                </div>        
        </div>  
}

export default Post

