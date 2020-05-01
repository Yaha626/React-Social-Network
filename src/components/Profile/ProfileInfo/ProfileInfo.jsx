import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Сommon/Preloader/Preloader';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = (profile, status, updateStatus) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt='' />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;

