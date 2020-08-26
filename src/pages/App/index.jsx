import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Settings from "./Settings";
import Dashboard from "./Admin/admin";
import Users from "./Users";
import SingleTalent from "./SingleTalent/index";

function App(props) {
	const {
		match: { path },
	} = props;

	return (
		<div>
			<Switch>
				<Route path={path} exact>
					<Redirect to={`${path}/dashboard`} />
				</Route>
				<Route path={`${path}/dashboard`} exact>
					<Dashboard />
				</Route>
				<Route path={`${path}/talent`} exact>
					<Users />
				</Route>
				<Route path={`${path}/talent/:id`}>
					<SingleTalent />
				</Route>
				<Route path={`${path}/settings`} exact>
					<Settings />
				</Route>
			</Switch>
		</div>
	);
}
export default withRouter(App);
