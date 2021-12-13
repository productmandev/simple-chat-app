import { combineReducers } from 'redux';

import users from './users';
import waitlist from './waitlist';
// import followers from './followers';

export default combineReducers({
  users,
  // followers,
  waitlist
})