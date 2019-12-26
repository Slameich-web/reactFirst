const SEND_MESSAGE="SEND-MESSAGE";

let initialState = {
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
  ]
}

const dialogsReducer = (state = initialState, action)=>{

        switch(action.type){
      
      case SEND_MESSAGE:
        {
          let body = action.newMessageBody;
        return {
          ...state,
          messages:[...state.messages, {id:6,message: body}]
        }
      }
        default:
            return state;
      }
    }
    export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

    export default dialogsReducer;
    
