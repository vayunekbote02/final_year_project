import { useEffect, useRef } from "react";
import * as faceapi from "@vladmandic/face-api";
import "./VideoPlayer.css";

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ setExpression, setEmotion }) => {
  const videoRef = useRef();
  const canvasRef = useRef();


  useEffect(() => {
    async function init() {
      await loadModels();
      await startVideo();
      faceMyDetect();
    }
    init();
  }, [videoRef.current, canvasRef.current]);


  const startVideo = async () => {
    try {
      const currentStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      // console.log(currentStream)
      videoRef.current.srcObject = currentStream;
    } catch (error) {
      console.error("error in media stream", error);
    }
  };

  const loadModels = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/model"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/model"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/model"),
      faceapi.nets.faceExpressionNet.loadFromUri("/model"),
    ]);
  };

  const faceMyDetect = () => {
    const expressionHistory = [];

    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions({ maxResults: 1 }))
        .withFaceLandmarks()
        .withFaceExpressions();
      // console.log(detections)
      if (detections.length > 0) {
        updateCanvas(detections, expressionHistory);
      }
    }, 400);
  };

  const updateCanvas = (detections, expressionHistory) => {
    canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
      videoRef.current
    );
    faceapi.matchDimensions(canvasRef.current, { width: 600, height: 500 });

    const expressions = detections[0]?.expressions;

    if (expressions) {
      setExpression(expressions);
      const { maxExpression, maxProbability } = findMaxExpression(expressions);
      expressionHistory.push(maxExpression);

      if (expressionHistory.length >= 10) {
        const predominantExpression =
          findPredominantExpression(expressionHistory);
        setEmotion(predominantExpression);
        expressionHistory.length = 0;
      }
    }

    const resized = faceapi.resizeResults(detections, {
      width: 600,
      height: 500,
    });

    faceapi.draw.drawDetections(canvasRef.current, resized);
    faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
    faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
  };

  const findMaxExpression = (expressions) => {
    let maxExpression = "";
    let maxProbability = 0;

    Object.entries(expressions).forEach(([emotion, probability]) => {
      if (probability > maxProbability) {
        maxProbability = probability;
        maxExpression = emotion;
      }
    });

    return { maxExpression, maxProbability };
  };

  const findPredominantExpression = (expressionHistory) => {
    const expressionCounts = expressionHistory.reduce((counts, expression) => {
      counts[expression] = (counts[expression] || 0) + 1;
      return counts;
    }, {});

    return Object.keys(expressionCounts).reduce((a, b) =>
      expressionCounts[a] > expressionCounts[b] ? a : b
    );
  };

  return (
    <div className="container">
      <video
        crossOrigin="anonymous"
        ref={videoRef}
        className="overflow-hidden rounded-lg appvide"
        autoPlay
      ></video>
      <canvas className="w-full h-full appcanvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default VideoPlayer;
