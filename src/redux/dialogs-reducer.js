const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { ID: 1, name: "Dimych" },
        { ID: 2, name: "Andrew" },
        { ID: 3, name: "Sveta" },
        { ID: 4, name: "Sasha" },
        { ID: 5, name: "Victor" },
        { ID: 6, name: "Valera" }
    ],
    messages: [
        { ID: 1, message: "Hi" },
        { ID: 2, message: "How is your" },
        { ID: 3, message: "Sveta" },
        { ID: 4, message: "Yo" },
        { ID: 5, message: "Yo" }
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { ID: 7, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;