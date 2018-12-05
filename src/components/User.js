import React from "react";
import "./css/User.css";

export default class User extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: ""
		};
	}

	handleNameChange(event) {
		this.setState({ name: event.target.value });
	}
	handleEmailChange(event) {
		this.setState({ email: event.target.value });
	}
	handlePasswordChange(event) {
		this.setState({ password: event.target.value });
	}

	onSubmit() {
		if (this.props.saveUser) {
			this.props.saveUser(this.state);
		}
		this.setState({
			name: "",
			email: "",
			password: ""
		});
	}
	render() {
		console.log("herere", this.state);
		return (
			<div className="base">
				<input
					placeholder="Name"
					name="name"
					value={this.state.name}
					onChange={event => this.handleNameChange(event)}
				/>
				<input
					placeholder="email"
					name="email"
					value={this.state.email}
					onChange={event => this.handleEmailChange(event)}
				/>
				<input
					placeholder="password"
					name="password"
					type="password"
					value={this.state.password}
					onChange={event => this.handlePasswordChange(event)}
				/>

				<div className="button">
					<button onClick={() => this.onSubmit()}>Submit</button>
				</div>
			</div>
		);
	}
}
