import { statement } from "@babel/template";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
  _state: {
    posts:[
    {id:1, message:'Slame1', likeCount:3},
    {id:2, message:'Slame2', likeCount:33},
    {id:3, message:'Slame3', likeCount:333},
    {id:4, message:'Slame4', likeCount:3333},
    {id:5, message:'Slame5', likeCount:33333},
    {id:6, message:'Slame4', likeCount:3333},
    {id:7, message:'Slame4', likeCount:3333},
    {id:8, message:'Slame4', likeCount:3333} 
    ], 



    dialogs: [
      {id:1, name:'Slame1'},
      {id:2, name:'Slame2'},
      {id:3, name:'Slame3'},
      {id:4, name:'Slame4'},
      {id:5, name:'Slame5'}
    ],

    messages:[
      {id:1, message:'Slame1'},
      {id:2, message:'Slame2'},
      {id:3, message:'Slame3'},
      {id:4, message:'Slame4'},
      {id:5, message:'Slame5'},
      {id:6, message:'Slame6'},
      {id:7, message:'Slame7'},
    ],
    newMessageBody:"",

  newPostText:'Slame',
},
_callSubscriber() {
  console.log('State')
},


getState(){
  return this._state;
},
subscribe(observer){
  this._callSubscriber=observer;
},

dispatch(action){
  this._state = profileReducer(this._state,action);
  this._state = dialogsReducer(this._state,action);
  this._state = sidebarReducer(this._state,action);

  this._callSubscriber(this._state);
  }

}

  export default store;
  window.store = store;