import React from "react";
import "./login.css";
import { loginUrl } from "./spotify";

const Login = () => {
	return (
		<div className="login">
			{/* Spotify Logo */}
			<img
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt="spotify_logo"
			/>
			{/* Login with spotify */}
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
};

export default Login;
