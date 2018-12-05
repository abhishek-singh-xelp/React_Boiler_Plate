import { connect } from "react-redux";
import { saveUser } from "../action/user";
import User from "../components/User";

const mapDispatchToProps = dispatch => {
	return {
		saveUser: userData => {
			dispatch(saveUser(userData));
		}
	};
};

const mapStateToProps = state => {
	return {
		userData: state.userData
	};
};

const UserContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(User);
export default UserContainer;
