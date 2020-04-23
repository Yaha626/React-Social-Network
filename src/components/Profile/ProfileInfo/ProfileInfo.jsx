import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Сommon/Preloader/Preloader';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
                <img className={s.src} src="https://skinali-market.ru/upload/resize_cache/iblock/a48/1920_531_156420db5d35cfb82f16501d0f4565d1d/a483c3cadef147812418e4072c7033a2.jpg" alt='' ></img>
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='' />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;

