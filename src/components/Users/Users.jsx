import React from 'react';
import Paginator from '../Сommon/components/Paginator/Paginator';
import User from './User';

let Users = (CurrentPage, onPageChanged, totalUsersCount, pageSize, users, ...props) => {
    return <div >
        <Paginator CurrentPage={CurrentPage} onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u} key={u.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow} follow={props.follow} />
                )
            }
        </div>
    </div >
}


export default Users;