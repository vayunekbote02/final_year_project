import Dropdown from "./components/Dropdown";
import VideoPlayer from "./components/VideoPlayer";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import BarChart from "./components/BarChart";
import { useEffect, useState } from "react";
import SelectMusic from "./components/SelectMusic";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function App() {
  const [expression, setExpression] = useState({});
  const [emotion, setEmotion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [audio, setAudio] = useState("");
  const [theme, setTheme] = useState("");

  const d = [
    { emotion: "happy", emoji: "😊" },
    { emotion: "neutral", emoji: "😐" },
    { emotion: "sad", emoji: "😔" },
    { emotion: "angry", emoji: "😠" },
    { emotion: "fearful", emoji: "😨" },
    { emotion: "surprised", emoji: "😯" },
    { emotion: "disgusted", emoji: "😒" },
  ];

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev == "bluuee" ? "yllo" : "bluuee";
      localStorage.setItem("emotion-theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("emotion-theme")
      ? localStorage.getItem("emotion-theme")
      : "yllo";
    setTheme(getTheme);
  }, []);

  return (
    <div
      className={`flex flex-col max-w-screen ${
        theme == "bluuee" ? "gradient-bg-bluuee" : "gradient-bg-yllo"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-6 py-4">
        <h1 className="text-5xl font-extrabold text-gray-100 font-quicksand">
          Face Emotion Recognition App
        </h1>
        <div className="flex items-center gap-4">
          {/* <Link to="/report">
            <button className="px-4 py-2 text-white bg-red-500 rounded-lg shadow-lg cursor-pointer hover:bg-red-400 hover:shadow-none">
              Generate Report
            </button>
          </Link> */}

          <Link to="/info">
            <button
              className={`px-4 py-2 text-white ${
                theme == "bluuee"
                  ? "bg-blue-500 hover:bg-blue-400"
                  : "bg-red-500 hover:bg-red-400"
              } rounded-lg shadow-lg cursor-pointer  hover:shadow-none`}
            >
              More Information
            </button>
          </Link>
          <button
            onClick={toggleTheme}
            className={`text-3xl ${
              theme == "bluuee"
                ? "hover:animate-pulse hover:text-blue-800"
                : "hover:text-white hover:animate-pulse"
            }`}
          >
            {theme === "bluuee" ? (
              <MdOutlineLightMode />
            ) : (
              <MdOutlineDarkMode />
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 p-2">
        <div className="flex flex-col col-span-1 p-2">
          <div className="mt-6">
            <Dropdown
              setSelectedLanguage={setSelectedLanguage}
              selectedLanguage={selectedLanguage}
              theme={theme}
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
            <BarChart expression={expression} theme={theme} />
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
                  <span
                    className={`${
                      theme == "bluuee" ? "text-green-700" : "text-orange-700"
                    }`}
                  >
                    {emotion} {d.find((item) => item.emotion === emotion).emoji}
                  </span>
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
