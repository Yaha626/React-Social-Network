
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            messages: [
                {
                    ID: 1,
                    message: "Hi"
                },
                {
                    ID: 2,
                    message: "How is your"
                },
                {
                    ID: 3,
                    message: "Sveta"
                },
                {
                    ID: 4,
                    message: "Yo"
                },
                {
                    ID: 5,
                    message: "Yo"
                },
                {
                    ID: 6,
                    message: "Yo"
                }

            ],
            dialogs: [
                {
                    ID: 1,
                    name: "Dimych"
                },
                {
                    ID: 2,
                    name: "Andrew"
                },
                {
                    ID: 3,
                    name: "Sveta"
                },
                {
                    ID: 4,
                    name: "Sasha"
                },
                {
                    ID: 5,
                    name: "Victor"
                },
                {
                    ID: 6,
                    name: "Valera"
                }

            ]
        },
        sidebar: {

        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is chenged');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // {{ type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                ID: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export default store;
window.store = store;