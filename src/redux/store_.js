import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import sidebarReducer from "./sidebar-reduser";
/*
let store = {
    _state:{
        profile:{
            posts:[
                {id: 1, post: 'post 1'},
                {id: 2, post: 'post 2'},
                {id: 3, post: 'post 3'},
            ],
            info: {
                name: "Aleksandr T.",
                date: "2/12/1987",
                city:'Magnitogorsk',
                education:'MGTU 10',
                img: '../img/user.png'
            },
            newPost: ""
        },
        chat:{
            dialogs:[
                {id: 1, name:'Anton'},
                {id: 2, name:'Elena'},
                {id: 3, name:'Petr'},
                {id: 4, name:'Katya'},
            ],
            messages:[
                {id: 1, message: 'How are you?'},
                {id: 2, message: 'I"m fine!'},
                {id: 3, message: 'yo'},
            ],
            newMessage: ""
        },
        friends:[
            {id:1, name: 'Anton'},
            {id:2, name: 'Elena'},
            {id:3, name: 'Petr'},
            {id:4, name: 'Katya'},
        ],
        news:[
            {id: 1, news: 'news 1'},
            {id: 2, news: 'news 2'},
            {id: 3, news: 'news 3'},
        ],
        menu:{
            items:[
                {to:'/profile', id:'1', name:'Profile', active:true},
                {to:'/dialogs', id:'2', name:'Messages', active:false},
                {to:'/news', id:'3', name:'News', active:false},
                {to:'/music', id:'4', name:'Music', active:false},
                {to:'/setting', id:'5', name:'Setting', active:false},
            ]
        },
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){},
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.chat = dialogsReducer(this._state.chat, action); // возвращаем либо измененный state, либо не измененный
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.menu = sidebarReducer(this._state.menu, action);

        this._callSubscriber(this._state);
    }
}*/
/*


export default store;
window.store = store;
*/
