import {
  SAVE_MESSAGES
} from "../constants/messages";


const initialState = {
  messageList: {}
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MESSAGES:
      console.log("reducer, SAVE_MESSAGES; action: ", action);
      const { userName, messageList: userMessages } = action.payload;

      return Object.assign({}, state, {
        messageList: {
          ...state.messageList,
          [userName]: userMessages
        }
      });
    default:
      return state;
  }
};

export default messageReducer;