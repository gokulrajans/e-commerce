import React from "react";
import "./Background.css"; // Assuming you have a CSS file for your styles
import backgroundVideo from "../../assets/Video/video-03.mp4";
import backgroundVideo_1 from "../../assets/Video/video-01.mp4";
import { useTheme } from "@mui/material/styles";

import {
    useMediaQuery,
  } from "@mui/material";


function BackgroundVideo() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="background-container">
      <video 
        autoPlay 
        muted 
        loop 
        id="background-video"
        className="background-video"
      >
        <source src={(isMobile)?backgroundVideo: backgroundVideo_1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* You can still overlay other components here */}
    </div>
  );
}

export default BackgroundVideo;
