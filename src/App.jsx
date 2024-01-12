import Dropdown from "./components/Dropdown";
import VideoPlayer from "./components/VideoPlayer";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden gradient-bg">
      {/* Title text */}
      <h1 className="text-4xl font-extrabold text-center text-gray-100">
        Face Emotion Recognition App
      </h1>
      {/* Second Row - Entire grid containing the app */}
      <div className="grid flex-grow grid-cols-4 gap-4">
        {/* First column -> song language and other components */}
        <div className="flex flex-col flex-grow">
          <Dropdown />
        </div>
        {/* Second column -> Main video player and music player components */}
        <div className="grid col-span-2 grid-rows-3 gap-8">
          {/* First two rows for the video player */}
          <div className="row-span-2 p-2 mt-10">
            <VideoPlayer />
          </div>
          {/* Last row for the music player */}
          <div className="">
            <AudioPlayer
              src="https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          </div>
        </div>
        {/* Third column -> Emotion chart and othe component */}
        <div>Hello</div>
      </div>
    </div>
  );
}

export default App;
