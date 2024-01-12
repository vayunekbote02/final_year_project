import Dropdown from "./components/Dropdown";
import VideoPlayer from "./components/VideoPlayer";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import BarChart from "./components/BarChart";
import { useState } from "react";

function App() {
  const [expression, setExpression] = useState({});
  const [emotion, setEmotion] = useState("");

  // const getGradientClass = (currentEmotion) => {
  //   switch (currentEmotion) {
  //     case "happy":
  //       return "gradient-bg-happy";
  //     case "sad":
  //       return "gradient-bg-sad";
  //     case "surprised":
  //       return "gradient-bg-surprised";
  //     // Add more cases for other emotions
  //     default:
  //       return "gradient-bg-neutral";
  //   }
  // };

  // const emotionClass = getGradientClass(emotion);
  // console.log(expression)

  return (
    <div className={`flex flex-col h-screen overflow-hidden gradient-bg`}>
      <h1 className="text-4xl font-extrabold text-center text-gray-100">
        Face Emotion Recognition App
      </h1>

      <div className="grid flex-grow grid-cols-4 gap-4">
        <div className="flex flex-col col-span-1">
          <Dropdown />
          <div className="flex items-center justify-center w-full h-full text-3xl border border-gray-100 rounded-md bg-slate-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 text-bold">
            Song Info
          </div>
        </div>

        <div className="grid col-span-2 grid-rows-3 gap-8">
          <div className="row-span-2 p-2 mt-10 border border-slate-900">
            <VideoPlayer
              setExpression={setExpression}
              setEmotion={setEmotion}
              emotion={emotion}
            />
          </div>
          <div className="">
            <AudioPlayer
              src="https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
              onPlay={(e) => console.log("onPlay")}
            />
          </div>
        </div>

        <div className="grid col-span-1 grid-rows-2">
          <BarChart expression={expression} />
          <div className="text-4xl font-bold text-white">
            {emotion ? (
              <div>Our model suggests that you are: {emotion}</div>
            ) : (
              <div>Please wait while we see how you feel!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
