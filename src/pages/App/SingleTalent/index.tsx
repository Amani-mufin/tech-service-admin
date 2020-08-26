import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";

import { apiBaseUrl } from "../../../config";
import Dashboard from "../../../components/AppShell";
import "./style.scss";

function App(props: any) {
	const [user, setUser] = useState(props.location.state);
	const {
		firstName,
		lastName,
		stack,
		aboutMe,
		address,
		portfolioUrl,
		seniority,
		linkedinUrl,
		githubUrl,
	} = user;
	return (
		<Dashboard>
			<div className="card grid-2">
				<div className="all-center">
					<img
						src="/assets/images/tolu.jpeg"
						className="round-img"
						alt="avatar"
						style={{ width: "150px" }}
					/>
					{firstName && lastName ? (
						<h2>{`${firstName} ${lastName}`}</h2>
					) : firstName ? (
						<h2>{firstName}</h2>
					) : lastName ? (
						<h2>{lastName}</h2>
					) : null}

					{stack && <p>Stack: {stack}</p>}
					{seniority && <p>Proficiency: {seniority}</p>}
				</div>
				<div>
					{aboutMe && (
						<>
							<h3>About Me</h3>
							<p>{aboutMe}</p>
						</>
					)}
					{aboutMe && (
						<>
							<h3>Address</h3>
							<p>{address}</p>
						</>
					)}
					{portfolioUrl && (
						<a href={portfolioUrl} className="btn btn-dark my-1">
							Visit Portfolio Profile
						</a>
					)}
				</div>
			</div>

			<div className="card text-center">
				<a href={linkedinUrl} className="badge badge-primary">
					LinkedIn
				</a>
				<a href={linkedinUrl} className="badge badge-success">
					Twitter
				</a>
				<a href={linkedinUrl} className="badge badge-danger">
					Facebook
				</a>
				<a href={githubUrl} className="badge badge-dark">
					Github
				</a>
			</div>
		</Dashboard>
	);
}
export default withRouter(App);
