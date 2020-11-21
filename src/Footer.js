import React from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
	return (
		<div className="footer__background">
			<div className="footer">
				{/* left footer */}

				<div className="footer__left">
					<img
						className="footer__albumLogo"
						src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Usher-yeah.jpg/220px-Usher-yeah.jpg"
						alt=""
					/>
					<div className="footer_songInfo">
						<strong>Yeah!</strong>
						<p>Usher</p>
					</div>
				</div>
				<div className="footer__center">
					<ShuffleIcon className="footer__green" />
					<SkipPreviousIcon className="footer__icon" />
					<PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
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
