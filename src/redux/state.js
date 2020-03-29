let rerenderEntireTree = () => {
    console.log('state is chenged')
}

let state = {
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
}


export const addPost = () => {
    let newPost = {
        ID: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
rerenderEntireTree = observer;
}

export default state;