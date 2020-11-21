import React from "react";
import "./body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
	const [{ discover_weekly }] = useDataLayerValue();
	console.log(discover_weekly);
	return (
		<div className="body">
			<Header spotify={spotify} />

			<div className="body__Info">
				<img
					src={
						discover_weekly?.images[0]?.url ||
						"https://research.atspotify.com/wp-content/uploads/sites/3/2018/07/Discover-Weekly-thumb.png"
					}
					alt=""
				/>
				<div className="body__InfoText">
					<strong>PLAYLIST</strong>
					<h2>{discover_weekly?.name || "Discover Weekly"}</h2>
					<p>{discover_weekly?.description || "Description..."}</p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__Icons">
					<div className="body__shuffle">
						<PlayArrowIcon fontSize="large" />
					</div>
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>

				{/* List of Songs */}
				{discover_weekly?.tracks?.items?.map((item) => (
					<SongRow track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
