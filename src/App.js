import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const cameraInitialization = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: "environment",
        },
      })
      .then((stream) => {
        const video = document.querySelector("video");
        video.srcObject = stream;

        // get the active track of the stream
        const track = stream.getVideoTracks()[0];

        video.addEventListener("loadedmetadata", (e) => {
          window.setTimeout(
            () => onCapabilitiesReady(track.getCapabilities()),
            500
          );
        });

        function onCapabilitiesReady(capabilities) {
          if (capabilities.torch) {
            track
              .applyConstraints({
                advanced: [{ torch: true }],
              })
              .catch((e) => console.log(e));
          }
        }
      })
      .catch((err) => console.error("getUserMedia() failed: ", err));
  };

  useEffect(() => {
    cameraInitialization();
  }, []);

  return (
    <div className="App">
      <div>
        <video autoPlay id="video"></video>
      </div>
    </div>
  );
}

export default App;
