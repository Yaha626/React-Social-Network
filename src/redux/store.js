import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
            newMessageBody: '',
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
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;