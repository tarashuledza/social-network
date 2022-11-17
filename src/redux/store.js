import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'post1', likesCount: 12},
                {id: 2, message: 'post2', likesCount: 11},
                {id: 3, message: 'yoyo', likesCount: 11},
                {id: 4, message: 'yoyo', likesCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Taras'},
                {id: 2, name: 'Tolya'},
                {id: 3, name: 'Arthur'},
                {id: 4, name: 'Kostya'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'yep'},
                {id: 3, message: "'I'm fine"},
                {id: 4, message: 'Yo'},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
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
// store - OOP