import React, { useState, useEffect } from "react";

function VideoPlayer(props) {
  const { apod } = props;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={apod.url}
        title={apod.title}
        frameBorder="0"
        allow="accelerometer ; autoplay ;clipboard-write;encripted-media;gyroscope;picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
