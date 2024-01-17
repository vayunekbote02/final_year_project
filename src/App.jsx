import Dropdown from "./components/Dropdown";
import VideoPlayer from "./components/VideoPlayer";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import BarChart from "./components/BarChart";
import { useState } from "react";
import SelectMusic from "./components/SelectMusic";

function App() {
  const [expression, setExpression] = useState({});
  const [emotion, setEmotion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [audio, setAudio] = useState("");

  return (
    <div className="flex flex-col max-w-screen gradient-bg">
      <h1 className="text-5xl font-extrabold text-center text-gray-100 font-quicksand">
        Face Emotion Recognition App
      </h1>

      <div className="grid grid-cols-4 gap-4 p-2">
        <div className="flex flex-col col-span-1 p-2">
          <div className="mt-6">
            <Dropdown
              setSelectedLanguage={setSelectedLanguage}
              selectedLanguage={selectedLanguage}
            />
          </div>
          <div className="mt-20">
            <SelectMusic
              selectedLanguage={selectedLanguage}
              emotion={emotion}
              setAudio={setAudio}
            />
          </div>
        </div>

        <div className="grid col-span-2 grid-rows-3 gap-4">
          <div className="w-full h-full row-span-2 p-2 mt-10">
            <VideoPlayer
              setExpression={setExpression}
              setEmotion={setEmotion}
            />
          </div>
          <div className="p-2">
            <AudioPlayer
              className="rounded-md "
              src={audio}
              onPlay={(e) => console.log("onPlay")}
            />
          </div>
          <div></div>
        </div>

        <div className="flex flex-col col-span-1 gap-5 p-2">
          <div className="">
            <BarChart expression={expression} />
          </div>
          <div>
            <div
              className={`${
                !emotion ? "animate-pulse opacity-100" : "opacity-75"
              } `}
            >
              <img
                src="/arrows3.png"
                alt="Downward pointing arrows"
                className="w-full h-full mb-8"
              />
            </div>
            <div className="text-4xl font-bold text-white font-quicksand">
              {emotion ? (
                <div className="text-center">
                  Our model suggests that you are feeling:{" "}
                  <span className="text-orange-700">{emotion}</span>
                </div>
              ) : (
                <div className="text-center animate-pulse">
                  Detecting your mood!
                </div>
              )}
            </div>
            <div
              className={`${
                !emotion ? "animate-pulse opacity-100" : "opacity-75"
              } `}
            >
              <img
                src="/arrows3.png"
                alt="Upward pointing arrows"
                className="w-full mt-8 rotate-180"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
