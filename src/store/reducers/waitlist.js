import {
  GET_USER_POSITION_FETCHING,
  GET_USER_POSITION_FETCHED,
  GET_USER_POSITION_ERROR
} from "../constants/waitlist";


const initialState = {
  userPosition: {},
  isUserPositionFetched: false,
  isUserPositionFetching: false,
  isUserPositionError: false
};

const waitlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_POSITION_FETCHING:
      return Object.assign({}, state, {
        userPosition: {},
        isUserPositionFetched: false,
        isUserPositionFetching: true,
        isUserPositionError: false
      });
    case GET_USER_POSITION_FETCHED:
      console.log("reducers, users, GET_USER_POSITION_FETCHED; action: ", action);

      return Object.assign({}, state, {
        userPosition: action.payload,
        isUserPositionFetched: true,
        isUserPositionFetching: false,
        isUserPositionError: false
      });
    case GET_USER_POSITION_ERROR:
      return Object.assign({}, state, {
        isUserPositionFetched: false,
        isUserPositionError: true,
        isUserPositionFetching: false
      });
    default:
      return state;
  }
};

export default waitlistReducer;