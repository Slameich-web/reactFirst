const UPDATE_NEW_MESSAGE_BODY="UPDATE-NEW-MESSAGE-BODY";
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
  ],
  newMessageBody:"",
}

const dialogsReducer = (state = initialState, action)=>{

        switch(action.type){
            case UPDATE_NEW_MESSAGE_BODY:
              return{
                ...state,
                newMessageBody: action.body
              }
              {
      }
      case SEND_MESSAGE:
        {
        let body=state.newMessageBody;
        return {
          ...state,
          newMessageBody:'',
          messages:[...state.messages, {id:6,message: body}]
        }
      }
        default:
            return state;
      }
    }
      export let sendMessageCreator = () => {
        return{
          type: SEND_MESSAGE
        }
      }
      export let updateNewMessageBodyCreator = (body) => {
        return{
          type: UPDATE_NEW_MESSAGE_BODY, body: body
        }
      }
    export default dialogsReducer;
    
