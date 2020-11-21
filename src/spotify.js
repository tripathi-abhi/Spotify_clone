// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3000/";

const clientId = "85622a3abcc941a4838bf1c31e3f4cf0";

const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
	"playlist-read-private",
	"playlist-read-collaborative",
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};

const loginUrl = `${authEndpoint}?response_type=token&client_id=${clientId}&scope=${scopes.join(
	"%20"
)}&redirect_uri=${redirectURI}&show_dialog=true`;

export default loginUrl;
