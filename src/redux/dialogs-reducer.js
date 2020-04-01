const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ ID: 7, message: body });
            return state;
        default: return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;