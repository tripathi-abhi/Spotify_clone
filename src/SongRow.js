import React from "react";
import "./songRow.css";

function SongRow({ track }) {
	return (
		<div className="songRow">
			<img
				className="songRow__album"
				src={track?.album?.images[2]?.url}
				alt=""
			/>
			<div className="songRow__Info">
				<h1>{track.name}</h1>
				<p>
					{track?.artists.map((artist) => (
						<span>{artist.name + ", "}</span>
					))}
					- <span>{track.album.name}</span>
				</p>
			</div>
		</div>
	);
}

export default SongRow;
