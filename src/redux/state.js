import { rerenderEntireTree } from '../render';

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
        ]
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


export let addPost = (postMessage) => {
    let newPost = {
        ID: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;