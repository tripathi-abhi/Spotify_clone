export const initialState = {
	user: null,
	// Remove default token value later...
	// token:
	// 	"BQAUzlhTHp-qbpin2y-s9zMPHVHx2fqXzIXajfxrOyK5fUvlQLTUhkLNe9YnGT2MIevOm6YSpneR_sQ5-BbH15AGkOujl_pqcitIptmYjvvdEYau8SA0dOTZxUAfPFgIyo6wxd-jTeyeMtJ1nAkQNHxDlOuf0WhgpTgjmxiKmiBF_XXiAfDiBTcog3IagQ",
	token: null,
	playlists: [],
	playing: false,
	item: null,
};

const reducer = (state, action) => {
	console.log(action);

	// action has a type & [payload].

	switch (action.type) {
		case "SET_USER":
			return { ...state, user: action.user };
		case "SET_TOKEN":
			return { ...state, token: action.token };
		case "SET_PLAYLISTS":
			return { ...state, playlists: action.playlists };
		case "SET_DISCOVER_WEEKLY":
			return { ...state, discover_weekly: action.discover_weekly };
		default:
			return state;
	}
};

export default reducer;
