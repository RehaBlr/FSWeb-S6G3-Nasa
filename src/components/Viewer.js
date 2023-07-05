import React, { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import ImageViewer from "./ImageViewer";

function Viewer(props) {
  const { dataProp: apod } = props;
  return (
    <div>
      <h1>{apod.title}</h1>
      <span>{apod.date}</span>
      <p>{apod.explanation}</p>
      {
        apod.media_type === "video" && <VideoPlayer apod={apod} />
        //   (
        //     <iframe
        //       width="560"
        //       height="315"
        //       src={apod.url}
        //       title={apod.title}
        //       frameBorder="0"
        //       allow="accelerometer ; autoplay ;clipboard-write;encripted-media;gyroscope;picture-in-picture"
        //       allowFullScreen
        //     ></iframe>
        //   )
      }
      {
        apod.media_type === "image" && <ImageViewer apod={apod} />
        //   <img src={apod.url} alt={apod.title} />
      }
    </div>
  );
}

export default Viewer;
