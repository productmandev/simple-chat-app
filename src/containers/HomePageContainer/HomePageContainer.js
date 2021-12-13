import { connect } from "react-redux";
// import { getGithubUser, getGithubFollowers } from 'store/actions'
import { getGithubUser, getWaitlistUserPosition } from "store/actions";
import { HomePage } from "components";

const mapStateToProps = (state) => ({
  waitlist: state.waitlist,
  githubUserData: state.users,
  // githubFollowerData: state.followers,
});

const mapDispatchToProps = (dispatch) => ({
  getGithubUser: (username, successFunction) =>
    dispatch(getGithubUser(username, successFunction)),
  getWaitlistUserPosition: (referrerCode, successFunction, failFunction) =>
    dispatch(
      getWaitlistUserPosition(referrerCode, successFunction, failFunction)
    ),
  // getGithubFollowers: (username, successFunction) => dispatch(getGithubFollowers(username, successFunction)),
});

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
export default HomePageContainer;
