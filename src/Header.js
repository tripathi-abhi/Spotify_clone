import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

const Header = () => {
	const [{ user }, dispatch] = useDataLayerValue();

	return (
		<div className="header">
			{/* Left header */}
			<div className="header__left">
				<SearchIcon />
				<input
					placeholder="Search for Artists, Songs, or Podcasts"
					type="text"
				/>
			</div>
			{/* Right header */}
			<div className="header__right">
				<Avatar src={user?.images[0]?.url} alt={user?.display_name} />
				<h4>{user?.display_name || "Guest"}</h4>
			</div>
		</div>
	);
};

export default Header;
