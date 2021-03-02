const ADD_MESSAGE = 'ADD_MESSAGE',
      UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

let initialState = {
    dialogs:[
        {id: 1, key:1, name:'Anton'},
        {id: 2, key:2, name:'Elena'},
        {id: 3, key:3, name:'Petr'},
        {id: 4, key:4, name:'Katya'},
    ],
    messages:[
        {id: 1, key:1, message: 'How are you?'},
        {id: 2, key:2, message: 'I"m fine!'},
        {id: 3, key:3, message: 'yo'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            if(action.text){
                return {
                    ...state,
                    messages: [...state.messages, {id: Math.floor(Math.random() * 99), key:Math.floor(Math.random() * 99),  message: action.text}]
                }
            }else{
                return state;
            }


        default:
            return state;
    }
}

export default dialogsReducer;


export const addMessageActionCreator = (text) => ({type: ADD_MESSAGE, text: text})
