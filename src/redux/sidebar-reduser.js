let initialState = {
    items:[
        {to:'/profile', id:'1', name:'Profile', active:true},
        {to:'/dialogs', id:'2', name:'Messages', active:false},
        {to:'/users', id:'6', name:'Users', active:false},
        {to:'/news', id:'3', name:'News', active:false},
        {to:'/music', id:'4', name:'Music', active:false},
        {to:'/setting', id:'5', name:'Setting', active:false},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;