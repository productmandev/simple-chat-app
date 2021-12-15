import {
  SAVE_MESSAGES
} from '../constants/messages';

export const saveUserMessages = (userName, messageList) => {
  console.log("action, SAVE_MESSAGES; userName, messageList: ", userName, messageList);
  return ({
    type: SAVE_MESSAGES,
    payload: {
      userName,
      messageList
    }
  });
}