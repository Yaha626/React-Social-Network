import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react';

let State = {
    posts: [
        {
            ID: 1,
            message: 'Hi chuvack',
            likesCount: 12
        },
        {
            ID: 1,
            message: 'Hi',
            likesCount: 42
        },
        {
            ID: 1,
            message: 'Hi chuvack',
            likesCount: 1
        },
        {
            ID: 1,
            message: 'yoyo',
            likesCount: 19
        }
    ]};

it('new post should be added', () => {
    let action = addPostActionCreator('first test');
    let newState =  profileReducer(State,{action});
   expect(newState.posts.length).toBe(5);
});


it('message of new post should be correct', () => {
    let action = addPostActionCreator('first test');
    let newState =  profileReducer(State,{action});
    expect(newState.posts[5].message).toBe('first test');
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState =  profileReducer(State,{action});
    expect(newState.posts.length).toBe(3);
});


it('after deleting length should not be changed if id is incorrect', () => {
    let action = deletePost(1000);
    let newState =  profileReducer(State,{action});
    expect(newState.posts.length).toBe(4);
});
