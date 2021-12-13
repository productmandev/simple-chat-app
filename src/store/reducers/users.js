import {
  GET_GITHUB_USER_FETCHING,
  GET_GITHUB_USER_FETCHED,
  GET_GITHUB_USER_ERROR
} from "../constants/users";


const initialState = {
  userData: {},
  isFetched: false,
  isFetching: false,
  isError: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GITHUB_USER_FETCHING:
      return Object.assign({}, state, {
        userData: {},
        isFetched: false,
        isFetching: true,
        isError: false
      });
    case GET_GITHUB_USER_FETCHED:
      console.log("reducers, users, GET_GITHUB_USER_FETCHED; action: ", action);

      return Object.assign({}, state, {
        userData: action.payload,
        isFetched: true,
        isFetching: false,
        isError: false
      });
    case GET_GITHUB_USER_ERROR:
      return Object.assign({}, state, {
        isFetched: false,
        isError: true,
        isFetching: false
      });
    default:
      return state;
  }
};

export default userReducer;