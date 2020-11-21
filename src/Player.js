import React from "react";
import Body from "./Body";
import "./Player.css";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Player = ({ spotify }) => {
	return (
		<div className="player">
			<div className="player__body">
				{/* Sidebar */}
				<SideBar />
				{/* Bosy */}
				<Body spotify={spotify} />
			</div>
			{/* Foorter */}
			<Footer spotify={spotify} />
		</div>
	);
};

export default Player;
