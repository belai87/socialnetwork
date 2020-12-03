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
            education:'MGTU 10'
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
    ]
}

export default state;