import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";

function App() {
  const [img, setImg] = useState(null);
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
  let cameraPhoto;

  const ccc = () => {
    let videoElement = document.getElementById("video");
    cameraPhoto = new CameraPhoto(videoElement);

    cameraPhoto
      ._getStreamDevice(FACING_MODES.ENVIRONMENT, {})
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
          console.log("heyyyy", capabilities);
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

    cameraPhoto
      .startCamera(FACING_MODES.ENVIRONMENT)
      .then(() => {
        console.log("Camera started !");
      })
      .catch((error) => {
        console.error("Camera not started!", error);
      });
  };

  useEffect(() => {
    // cameraInitialization();
    ccc();
  }, []);

  const takePic = () => {
    const config = {
      sizeFactor: 1,
    };
    let dataUri = cameraPhoto.getDataUri(config);
    console.log(dataUri);
    setImg(dataUri);
    cameraPhoto.stopCamera();
  };

  return (
    <div className="App">
      <div>
        {img !== null ? (
          <img src={img} alt="hey" />
        ) : (
          <div>
            <video autoPlay id="video"></video>
            <button onClick={takePic}>Take Pic</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
