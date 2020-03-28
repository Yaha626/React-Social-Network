import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.src} src="https://skinali-market.ru/upload/resize_cache/iblock/a48/1920_531_156420db5d35cfb82f16501d0f4565d1d/a483c3cadef147812418e4072c7033a2.jpg"></img>
            </div>
            <div className={s.discriptionBlock}>
                <img src=" "></img>
      ava + description
           </div>
        </div>
    )
}

export default ProfileInfo

