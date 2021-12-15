import { connect } from "react-redux";
import { MessagePage } from "components";
import { saveUserMessages } from "store/actions";

const mapStateToProps = (state) => ({
  messages: state.messages
});

const mapDispatchToProps = (dispatch) => ({
  saveUserMessages: (userName, messageList) =>
    dispatch(saveUserMessages(userName, messageList))
});

const MessagePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagePage);
export default MessagePageContainer;
