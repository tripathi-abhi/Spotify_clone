import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
	//
	const [{ user, token }, dispatch] = useDataLayerValue();
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.setAccessToken(_token);

			// get  user details

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user,
				});
			});

			// get the user playlists

			spotify.getUserPlaylists().then((playlists) => {
				console.log(playlists);
				dispatch({
					type: "SET_PLAYLISTS",
					playlists,
				});
			});

			// get dicover weekly

			spotify.getPlaylist("37i9dQZEVXcGEESig3RKFU").then((response) => {
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					discover_weekly: response,
				});
			});
		}
	}, []);

	console.log("Person : ", user);

	return (
		<div className="App">
			{/* Spotify Logo */}
			{/* Login with spotify  */}
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
