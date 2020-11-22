import React, { useEffect } from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useDataLayerValue } from "./DataLayer";

function Footer({ spotify }) {
	const [{ token, playing, item }, dispatch] = useDataLayerValue();

	useEffect(() => {
		spotify.getMyCurrentPlaybackState().then((response) => {
			console.log("playback", response || "undefined");
			dispatch({
				type: "SET_PLAYING",
				playing: response.is_playing,
			});

			dispatch({
				type: "SET_ITEM",
				item: response.item,
			});
		});
	}, [spotify]);

	const handlePlayPause = () => {
		if (playing) {
			spotify.pause();
			dispatch({
				type: "SET_PLAYING",
				playing: false,
			});
		} else {
			spotify.play();
			dispatch({
				type: "SET_PLAYING",
				playing: true,
			});
		}
	};

	const handleText = (text) => {
		if (text?.length > 40) {
			return text.substring(0, 37) + "...";
		}
		return text;
	};

	return (
		<div className="footer__background">
			<div className="footer">
				{/* left footer */}

				<div className="footer__left">
					{item ? (
						<>
							<img
								className="footer__albumLogo"
								src={item?.album?.images[2]?.url}
								alt={item?.name}
							/>
							<div className="footer_songInfo">
								<strong>{handleText(item?.name)}</strong>
								<p>
									{handleText(
										item?.artists.map((artist) => artist.name).join(", ")
									)}
								</p>
							</div>
						</>
					) : null}
				</div>
				<div className="footer__center">
					<ShuffleIcon className="footer__green" />
					<SkipPreviousIcon className="footer__icon" />
					{playing ? (
						<PauseCircleOutlineIcon
							onClick={() => handlePlayPause}
							fontSize="large"
							className="footer__icon"
						/>
					) : (
						<PlayCircleOutlineIcon
							onClick={() => handlePlayPause}
							fontSize="large"
							className="footer__icon"
						/>
					)}

					<SkipNextIcon className="footer__icon" />
					<RepeatIcon className="footer__green" />
				</div>
				<div className="footer__right">
					<Grid container spacing={2}>
						<Grid item>
							<PlaylistPlayIcon />
						</Grid>
						<Grid item>
							<VolumeDownIcon />
						</Grid>
						<Grid item xs>
							<Slider aria-labelledby="continuous-slider" />
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default Footer;
