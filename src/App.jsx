import Dropdown from "./components/Dropdown";
import VideoPlayer from "./components/VideoPlayer";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Chart from "./components/Chart";
import { useState } from "react";

function App() {

  const [expression, setExpression] = useState({})
  // console.log(expression)

  return (
    <div className="flex flex-col h-screen overflow-hidden gradient-bg">

      <h1 className="text-4xl font-extrabold text-center text-gray-100">
        Face Emotion Recognition App
      </h1>

      <div className="grid flex-grow grid-cols-4 gap-4">

        <div className="flex flex-col flex-grow">
          <Dropdown />
        </div>

        <div className="grid col-span-2 grid-rows-3 gap-8">

          <div className="row-span-2 border border-slate-900 p-2 mt-10">
            <VideoPlayer setExpression={setExpression} />
          </div>
          <div className="">
            <AudioPlayer
              src="https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
              onPlay={(e) => console.log("onPlay")}

            />
          </div>
        </div>

        <div className="col-span-1">

          <Chart/>

        </div>
      </div>
    </div>
  );
}

export default App;
