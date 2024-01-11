import { useEffect, useRef } from "react";
const VideoPlayer = () => {
  const videoRef = useRef();

  const startVideo = async () => {
    try {
      const currentStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = currentStream;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    startVideo();
  }, []);

  return (
    <div>
      <video
        crossOrigin="anonymous"
        ref={videoRef}
        className="scale-x-[-1] border-4 border-yellow-300 mt-5 rounded-lg shadow-box w-full"
        autoPlay
      ></video>
    </div>
  );
};
export default VideoPlayer;
