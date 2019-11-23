const ADD_POST ='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';

let initialState = {
     posts:[
    {id:1, message:'Slame1', likeCount:3},
    {id:2, message:'Slame2', likeCount:33},
    {id:3, message:'Slame3', likeCount:333},
    {id:4, message:'Slame4', likeCount:3333},
    {id:5, message:'Slame5', likeCount:33333},
    {id:6, message:'Slame4', likeCount:3333},
    {id:7, message:'Slame4', likeCount:3333},
    {id:8, message:'Slame4', likeCount:3333}, 
  ],
    newPostText:'Message'
};
const profileReducer = (state = initialState, action)=>{
    switch(action.type){

    case ADD_POST:{
        let newPost ={
      id: 6,
      message: state.newPostText,
      likeCount:0
  }; 
  return {...state,
  posts:[...state.posts,newPost],
newPostText:''};
}
  case UPDATE_NEW_POST_TEXT:{
    return{...state,
    newPostText:action.newText};
 
  }
    default:
        return state;
    }
}

export let addPostActionCreator = () => {
    return{
      type: ADD_POST
    }
  }
  export let updateNewPostTextActionCreator = (text) => {
    return{
      type: UPDATE_NEW_POST_TEXT, newText: text
    }
  }
  
export default profileReducer;