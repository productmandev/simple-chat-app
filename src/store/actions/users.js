import {
  GET_GITHUB_USER_FETCHING,
  GET_GITHUB_USER_FETCHED,
  GET_GITHUB_USER_ERROR
} from '../constants/users';

import axios from 'axios';


export const getGithubUser = (githubUsername, successFunction, errFunction) => {
  console.log("action, users, getGithubUser; githubUsername: ", githubUsername);

  return dispatch => {
    dispatch(getGithubUserStarted());

    axios
      .get(`https://api.github.com/users/${githubUsername}`)
      .then(res => {
        dispatch(getGithubUserSuccess(res.data));
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
        dispatch(getGithubUserFailure(err.message));
        if (errFunction) {
          errFunction();
        }
      });
  };
};

const getGithubUserSuccess = (githubUser) => {
  console.log("action, users, getGithubUserSuccess; githubUser: ", githubUser);
  return ({
    type: GET_GITHUB_USER_FETCHED,
    payload: {
      ...githubUser
    }
  });
}

const getGithubUserStarted = () => ({
  type: GET_GITHUB_USER_FETCHING
});

const getGithubUserFailure = error => {
  console.log("action, users, getGithubUserFailure; error: ", error);
  return ({
    type: GET_GITHUB_USER_ERROR,
    payload: {
      error
    }
  });
}