const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: 'IT-camasutra.com'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                ID: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;