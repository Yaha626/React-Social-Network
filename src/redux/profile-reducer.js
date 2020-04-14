import {usersAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
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
        },
        {
            ID: 1,
            message: 'olala ',
            likesCount: 12
        }
    ],
    newPostText: 'IT-camasutra.com',
    profile: null

}



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                ID: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        this.props.setUserProfile(response.data);
    });
}

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;