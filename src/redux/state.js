let rerenderEntireTree = () => {}

let state = {
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
        newPost: "",
        addPost(){
            this.posts.push({id: Math.floor(Math.random() * 99), post: this.newPost});
            rerenderEntireTree(state);
        },
        onChangeArea(text){
            this.newPost = text;
        }
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
    }
}

export default state;

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
}