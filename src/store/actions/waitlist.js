import {
  GET_USER_POSITION_FETCHING,
  GET_USER_POSITION_FETCHED,
  GET_USER_POSITION_ERROR
} from '../constants/waitlist';

import axios from 'axios';


export const getWaitlistUserPosition = (referrerCode, successFunction, errFunction) => {
  console.log("action, users, getWaitlistUserPosition; referrerCode: ", referrerCode);

  return dispatch => {
    dispatch(getWaitlistUserPositionStarted());
    // https://ekos.4alabs.com/api/v1/waitlist/user-position/5723903075170
    axios
      .get(`https://ekos.4alabs.com/api/v1/waitlist/user-position/${referrerCode}`)
      .then(res => {
        dispatch(getWaitlistUserPositionSuccess(res.data));
        // .then(response => {
        // if (successFunction) {
        //     // successFunction(response);
        //     successFunction();
        // }        
        // });            

        if (successFunction) {
          console.log("SUCCESS");
          // successFunction(response);
          successFunction();
        }
      })
      .catch(err => {
        dispatch(getWaitlistUserPositionFailure(err.message));
        if (errFunction) {
          errFunction();
        }
      });
  };
};

const getWaitlistUserPositionSuccess = (userPosition) => {
  console.log("action, users, getWaitlistUserPositionSuccess; userPosition: ", userPosition);
  return ({
    type: GET_USER_POSITION_FETCHED,
    payload: {
      ...userPosition
    }
  });
}

const getWaitlistUserPositionStarted = () => ({
  type: GET_USER_POSITION_FETCHING
});

const getWaitlistUserPositionFailure = error => {
  console.log("action, users, getWaitlistUserPositionFailure; error: ", error);
  return ({
    type: GET_USER_POSITION_ERROR,
    payload: {
      error
    }
  });
}