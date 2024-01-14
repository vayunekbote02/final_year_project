import Dropdown from "./components/Dropdown";
import VideoPlayer from "./components/VideoPlayer";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import BarChart from "./components/BarChart";
import { useState } from "react";

function App() {
  const [expression, setExpression] = useState({});
  const [emotion, setEmotion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [audio , setAudio] = useState("")
  const playlists = {
    neutral : {
      Hindi: [
        { name: 'neutral Puzzle', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
        { name: 'HA HA ', url: 'https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg' },
        { name: 'Song 3', url: 'https://example.com/song3' },
      ],
      English: [
        { name: 'English Kangaroo Music', url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
        { name: 'Song B', url: 'https://example.com/songB' },
        { name: 'Song C', url: 'https://example.com/songC' },
      ],
      Marathi: [
        { name: 'Marathi Theme', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
        { name: 'Song Y', url: 'https://example.com/songY' },
        { name: 'Song Z', url: 'https://example.com/songZ' },
      ],
    },
    happy : {
      Hindi: [
        { name: 'happy Puzzle', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
        { name: 'HA HA ', url: 'https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg' },
        { name: 'Song 3', url: 'https://example.com/song3' },
      ],
      English: [
        { name: 'Kangaroo Music', url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
        { name: 'Song B', url: 'https://example.com/songB' },
        { name: 'Song C', url: 'https://example.com/songC' },
      ],
      Marathi: [
        { name: 'Theme', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
        { name: 'Song Y', url: 'https://example.com/songY' },
        { name: 'Song Z', url: 'https://example.com/songZ' },
      ],
    },
    sad : {
      Hindi: [
        { name: 'sad Puzzle', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
        { name: 'HA HA ', url: 'https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg' },
        { name: 'Song 3', url: 'https://example.com/song3' },
      ],
      English: [
        { name: 'Kangaroo Music', url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
        { name: 'Song B', url: 'https://example.com/songB' },
        { name: 'Song C', url: 'https://example.com/songC' },
      ],
      Marathi: [
        { name: 'Theme', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
        { name: 'Song Y', url: 'https://example.com/songY' },
        { name: 'Song Z', url: 'https://example.com/songZ' },
      ],
    },angry : {
      Hindi: [
        { name: 'angry Puzzle', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
        { name: 'HA HA ', url: 'https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg' },
        { name: 'Song 3', url: 'https://example.com/song3' },
      ],
      English: [
        { name: 'Kangaroo Music', url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
        { name: 'Song B', url: 'https://example.com/songB' },
        { name: 'Song C', url: 'https://example.com/songC' },
      ],
      Marathi: [
        { name: 'Theme', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
        { name: 'Song Y', url: 'https://example.com/songY' },
        { name: 'Song Z', url: 'https://example.com/songZ' },
      ],
    },
    fearful : {
      Hindi: [
        { name: 'fearful Puzzle', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
        { name: 'HA HA ', url: 'https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg' },
        { name: 'Song 3', url: 'https://example.com/song3' },
      ],
      English: [
        { name: 'Kangaroo Music', url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
        { name: 'Song B', url: 'https://example.com/songB' },
        { name: 'Song C', url: 'https://example.com/songC' },
      ],
      Marathi: [
        { name: 'Theme', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
        { name: 'Song Y', url: 'https://example.com/songY' },
        { name: 'Song Z', url: 'https://example.com/songZ' },
      ],
    },
    disgusted : {
      Hindi: [
        { name: 'disgusted Puzzle', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
        { name: 'HA HA ', url: 'https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg' },
        { name: 'Song 3', url: 'https://example.com/song3' },
      ],
      English: [
        { name: 'Kangaroo Music', url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
        { name: 'Song B', url: 'https://example.com/songB' },
        { name: 'Song C', url: 'https://example.com/songC' },
      ],
      Marathi: [
        { name: 'Theme', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
        { name: 'Song Y', url: 'https://example.com/songY' },
        { name: 'Song Z', url: 'https://example.com/songZ' },
      ],
    },
    surprised : {
      Hindi: [
        { name: 'surprised Puzzle', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
        { name: 'HA HA ', url: 'https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg' },
        { name: 'Song 3', url: 'https://example.com/song3' },
      ],
      English: [
        { name: 'Kangaroo Music', url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3' },
        { name: 'Song B', url: 'https://example.com/songB' },
        { name: 'Song C', url: 'https://example.com/songC' },
      ],
      Marathi: [
        { name: 'Theme', url: 'https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3' },
        { name: 'Song Y', url: 'https://example.com/songY' },
        { name: 'Song Z', url: 'https://example.com/songZ' },
      ],
    },
  };

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
    <div className={`flex flex-col w-screen h-screen overflow-hidden gradient-bg`}>
      <h1 className="text-4xl font-extrabold text-center text-gray-100">
        Face Emotion Recognition App
      </h1>

      <div className="grid flex-grow grid-cols-4 gap-4 p-2">

        <div className="flex flex-col col-span-1 p-2">
          <Dropdown setSelectedLanguage={setSelectedLanguage} />
          <div className="flex items-center justify-center w-full h-full text-3xl border border-gray-100 rounded-md bg-slate-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 text-bold">
            {selectedLanguage ? (
              <div className="mt-4 absolute top-0 p-2">
                <h3 className=" text-lg w-full text-center font-semibold mb-2">Playlist for {selectedLanguage}</h3>
                <ul className="flex flex-col ">
                  {playlists?.[emotion]?.[selectedLanguage].map((song, index) => (
                    <li key={index} className="flex items-center cursor-pointer  font-semibold hover:scale-105 transition duration-150">
                      <div className="text-lg mr-4">
                        {index+1}{"."}
                      </div>
                      <div href={song.url} rel="noopener noreferrer">
                        <div onClick={()=>setAudio(song?.url)} className="text-lg">
                          {song.name}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-lg w-full text-center font-semibold mb-2">
                Select a language
              </div>
            )}
          </div>
        </div>

        <div className="grid col-span-2 grid-rows-3 gap-4">
          <div className="row-span-2 p-2 mt-10">
            <VideoPlayer
              setExpression={setExpression}
              setEmotion={setEmotion}
              emotion={emotion}
            />
          </div>
          <div className="p-2">
            <AudioPlayer className=" rounded-md "
              src={audio}
              onPlay={(e) => console.log("onPlay")}
            />
          </div>
        </div>

        <div className="grid col-span-1 grid-rows-2 p-2">
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
