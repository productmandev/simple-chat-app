import { connect } from "react-redux";
import { getGithubUser } from "store/actions";
import { FriendsPage } from "components";

const mapStateToProps = (state) => ({
  githubUserData: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getGithubUser: (username, successFunction) =>
    dispatch(getGithubUser(username, successFunction))
});

const FriendsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPage);
export default FriendsPageContainer;
