import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            users[
            {
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkkhSSkcL1wzlhau2nBESN0GtWi6Ity6ZWxfwFgjTwy95-rHsX&usqp=CAU',
                ID: 1,
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkkhSSkcL1wzlhau2nBESN0GtWi6Ity6ZWxfwFgjTwy95-rHsX&usqp=CAU',
                ID: 2,
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: { city: 'Moscow', country: 'Russia' }
            },
            {
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkkhSSkcL1wzlhau2nBESN0GtWi6Ity6ZWxfwFgjTwy95-rHsX&usqp=CAU',
                ID: 3,
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: { city: 'Kiev', country: 'Ukraine' }
            }
            ]
        )
    };

    return <div>
        {
            props.users.map(u => <div key={u.ID}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.ID) }}>UnFollow</button>
                            : <button onClick={() => { props.follow(u.ID) }}>Follow</button>}
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fillName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;