import React, { useState, useEffect } from "react";

function ImageViewer(props) {
  const { apod } = props;
  return (
    <div>
      <img src={apod.url} alt={apod.title} />
    </div>
  );
}

export default ImageViewer;
