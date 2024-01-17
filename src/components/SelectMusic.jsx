// const SelectMusic = ({ selectedLanguage, emotion, setAudio }) => {
//   const playlists = {
//     neutral: {
//       Hindi: [
//         {
//           name: "neutral Puzzle",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
//         },
//         {
//           name: "HA HA ",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
//         },
//         { name: "Song 3", url: "https://example.com/song3" },
//       ],
//       English: [
//         {
//           name: "English Kangaroo Music",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
//         },
//         { name: "Song B", url: "https://example.com/songB" },
//         { name: "Song C", url: "https://example.com/songC" },
//       ],
//       Marathi: [
//         {
//           name: "Marathi Theme",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
//         },
//         { name: "Song Y", url: "https://example.com/songY" },
//         { name: "Song Z", url: "https://example.com/songZ" },
//       ],
//     },
//     happy: {
//       Hindi: [
//         {
//           name: "happy Puzzle",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
//         },
//         {
//           name: "HA HA ",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
//         },
//         { name: "Song 3", url: "https://example.com/song3" },
//       ],
//       English: [
//         {
//           name: "Kangaroo Music",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
//         },
//         { name: "Song B", url: "https://example.com/songB" },
//         { name: "Song C", url: "https://example.com/songC" },
//       ],
//       Marathi: [
//         {
//           name: "Theme",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
//         },
//         { name: "Song Y", url: "https://example.com/songY" },
//         { name: "Song Z", url: "https://example.com/songZ" },
//       ],
//     },
//     sad: {
//       Hindi: [
//         {
//           name: "sad Puzzle",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
//         },
//         {
//           name: "HA HA ",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
//         },
//         { name: "Song 3", url: "https://example.com/song3" },
//       ],
//       English: [
//         {
//           name: "Kangaroo Music",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
//         },
//         { name: "Song B", url: "https://example.com/songB" },
//         { name: "Song C", url: "https://example.com/songC" },
//       ],
//       Marathi: [
//         {
//           name: "Theme",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
//         },
//         { name: "Song Y", url: "https://example.com/songY" },
//         { name: "Song Z", url: "https://example.com/songZ" },
//       ],
//     },
//     angry: {
//       Hindi: [
//         {
//           name: "angry Puzzle",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
//         },
//         {
//           name: "HA HA ",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
//         },
//         { name: "Song 3", url: "https://example.com/song3" },
//       ],
//       English: [
//         {
//           name: "Kangaroo Music",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
//         },
//         { name: "Song B", url: "https://example.com/songB" },
//         { name: "Song C", url: "https://example.com/songC" },
//       ],
//       Marathi: [
//         {
//           name: "Theme",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
//         },
//         { name: "Song Y", url: "https://example.com/songY" },
//         { name: "Song Z", url: "https://example.com/songZ" },
//       ],
//     },
//     fearful: {
//       Hindi: [
//         {
//           name: "fearful Puzzle",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
//         },
//         {
//           name: "HA HA ",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
//         },
//         { name: "Song 3", url: "https://example.com/song3" },
//       ],
//       English: [
//         {
//           name: "Kangaroo Music",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
//         },
//         { name: "Song B", url: "https://example.com/songB" },
//         { name: "Song C", url: "https://example.com/songC" },
//       ],
//       Marathi: [
//         {
//           name: "Theme",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
//         },
//         { name: "Song Y", url: "https://example.com/songY" },
//         { name: "Song Z", url: "https://example.com/songZ" },
//       ],
//     },
//     disgusted: {
//       Hindi: [
//         {
//           name: "disgusted Puzzle",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
//         },
//         {
//           name: "HA HA ",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
//         },
//         { name: "Song 3", url: "https://example.com/song3" },
//       ],
//       English: [
//         {
//           name: "Kangaroo Music",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
//         },
//         { name: "Song B", url: "https://example.com/songB" },
//         { name: "Song C", url: "https://example.com/songC" },
//       ],
//       Marathi: [
//         {
//           name: "Theme",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
//         },
//         { name: "Song Y", url: "https://example.com/songY" },
//         { name: "Song Z", url: "https://example.com/songZ" },
//       ],
//     },
//     surprised: {
//       Hindi: [
//         {
//           name: "surprised Puzzle",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
//         },
//         {
//           name: "HA HA ",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
//         },
//         { name: "Song 3", url: "https://example.com/song3" },
//       ],
//       English: [
//         {
//           name: "Kangaroo Music",
//           url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
//         },
//         { name: "Song B", url: "https://example.com/songB" },
//         { name: "Song C", url: "https://example.com/songC" },
//       ],
//       Marathi: [
//         {
//           name: "Theme",
//           url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
//         },
//         { name: "Song Y", url: "https://example.com/songY" },
//         { name: "Song Z", url: "https://example.com/songZ" },
//       ],
//     },
//   };
//   return (
//     <div className="flex items-center justify-center w-full text-2xl border border-gray-100 rounded-md bg-slate-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 text-bold">
//       {selectedLanguage ? (
//         <div className="absolute top-0 p-2 mt-4">
//           <h3 className="w-full mb-2 text-lg font-semibold text-center ">
//             Playlist for {selectedLanguage}
//           </h3>
//           <ul className="flex flex-col ">
//             {playlists?.[emotion]?.[selectedLanguage].map((song, index) => (
//               <li
//                 key={index}
//                 className="flex items-center font-semibold transition duration-150 cursor-pointer hover:scale-105"
//               >
//                 <div className="mr-4 text-lg">
//                   {index + 1}
//                   {"."}
//                 </div>
//                 <div href={song.url} rel="noopener noreferrer">
//                   <div onClick={() => setAudio(song?.url)} className="text-lg">
//                     {song.name}
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div className="w-full mb-2 text-lg font-semibold text-center">
//           Select a language
//         </div>
//       )}
//     </div>
//   );
// };

import { useState } from "react";

// export default SelectMusic;

const SelectMusic = ({ selectedLanguage, emotion, setAudio }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const playlists = {
    neutral: {
      Hindi: [
        {
          name: "Chabakya",
          url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/instrumental/happy/spotifydown.com%20-%20Chanakya.mp3?raw=true",
        },
        {
          name: "Rannjhana",
          url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/instrumental/happy/spotifydown.com%20-%20Raanjhana.mp3?raw=true",
        },
        { name: "Roslyn", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/instrumental/happy/spotifydown.com%20-%20Roslyn.mp3?raw=true" },
      ],
      English: [
        {
          name: "One Direction Night changes",
          url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/neutral/One%20Direction%20-%20Night%20Changes.mp3?raw=true",
        },
        { name: "One Direction - What Makes You Beautiful ", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/neutral/One%20Direction%20-%20What%20Makes%20You%20Beautiful%20(Official%20Video).mp3?raw=true" },
        { name: "The Weeknd - Blinding Lights ", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/neutral/The%20Weeknd%20-%20Blinding%20Lights%20(Official%20Audio).mp3?raw=true" },
      ],
      Marathi: [
        {
          name: "Marathi Theme",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
        },
        { name: "Song Y", url: "https://example.com/songY" },
        { name: "Song Z", url: "https://example.com/songZ" },
      ],
    },
    happy: {
      Hindi: [
        {
          name: "Makhna",
          url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/hindi/happy/Makhna%20-%20Drive_%20Sushant%20Singh%20Rajput%2C%20Jacqueline%20Fernandez_%20Tanishk%20Bagchi%2C%20Asees%20Kaur.mp3?raw=true",
        },
        {
          name: "Hai Apna Dil toh Awara",
          url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/hindi/happy/Hai%20Apna%20Dil%20To%20Awara%20_%20Sanam%20ft.%20Soogum%20Sookha.mp3?raw=true",
        },
        { name: "Mitwa", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/hindi/happy/Mitwa%20Full%20Video%20-%20KANK_Shahrukh%20Khan%2CRani%20Mukherjee_Shafqat%20Amanat%20Ali_Shankar%20Mahadevan.mp3?raw=true" },
      ],
      English: [
        {
          name: "Dexys Midnight Runners",
          url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/happy/Dexys%20Midnight%20Runners__ENGLISH__HAPPY.mp4?raw=true",
        },
        { name: "The Gang-Celebration ", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/happy/Kool%20_%20The%20Gang%20-%20Celebration%20(Bizen%20Lopez%20Social%20Vision)__ENGLISH__HAPPY.mp3?raw=true" },
        { name: "Enjoy", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/happy/audio__ENGLISH__HAPPY.mp3?raw=true" },
      ],
      Marathi: [
        {
          name: "Theme",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
        },
        { name: "Song Y", url: "https://example.com/songY" },
        { name: "Song Z", url: "https://example.com/songZ" },
      ],
    },
    sad: {
      Hindi: [
        {
          name: "sad Puzzle",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
        },
        {
          name: "HA HA ",
          url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
        },
        { name: "Song 3", url: "https://example.com/song3" },
      ],
      English: [
        {
          name: "Billie Eilish - when the party is over",
          url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/sad/Billie%20Eilish%20-%20when%20the%20party%20s%20over%20(Official%20Music%20Video).mp3",
        },
        { name: "FINNEAS - Love is Pain", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/sad/FINNEAS%20-%20Love%20is%20Pain%20(Official%20Music%20Video).mp3" },
        { name: "Lewis Capaldi - Someone You Loved", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/sad/Lewis%20Capaldi%20-%20Someone%20You%20Loved.mp3" },
      ],
      Marathi: [
        {
          name: "Theme",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
        },
        { name: "Song Y", url: "https://example.com/songY" },
        { name: "Song Z", url: "https://example.com/songZ" },
      ],
    },
    angry: {
      Hindi: [
        {
          name: "Ranjish",
          url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/hindi/angry/spotifydown.com%20-%20Ranjish%20Hi%20Sahi.mp3?raw=true",
        },
        {
          name: "Kautilya",
          url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/instrumental/angry/spotifydown.com%20-%20Kautilya%20(The%20Echo%20Project).mp3",
        },
        { name: "Raanjhana", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/instrumental/angry/spotifydown.com%20-%20Raanjhana.mp3" },
      ],
      English: [
        {
          name: "Kangaroo Music",
          url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
        },
        { name: "Song B", url: "https://example.com/songB" },
        { name: "Song C", url: "https://example.com/songC" },
      ],
      Marathi: [
        {
          name: "Theme",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
        },
        { name: "Song Y", url: "https://example.com/songY" },
        { name: "Song Z", url: "https://example.com/songZ" },
      ],
    },
    fearful: {
      Hindi: [
        {
          name: "fearful Puzzle",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
        },
        {
          name: "HA HA ",
          url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
        },
        { name: "Song 3", url: "https://example.com/song3" },
      ],
      English: [
        {
          name: "Kangaroo Music",
          url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
        },
        { name: "Song B", url: "https://example.com/songB" },
        { name: "Song C", url: "https://example.com/songC" },
      ],
      Marathi: [
        {
          name: "Theme",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
        },
        { name: "Song Y", url: "https://example.com/songY" },
        { name: "Song Z", url: "https://example.com/songZ" },
      ],
    },
    disgusted: {
      Hindi: [
        {
          name: "disgusted Puzzle",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
        },
        {
          name: "HA HA ",
          url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
        },
        { name: "Song 3", url: "https://example.com/song3" },
      ],
      English: [
        {
          name: "Kangaroo Music",
          url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
        },
        { name: "Song B", url: "https://example.com/songB" },
        { name: "Song C", url: "https://example.com/songC" },
      ],
      Marathi: [
        {
          name: "Theme",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
        },
        { name: "Song Y", url: "https://example.com/songY" },
        { name: "Song Z", url: "https://example.com/songZ" },
      ],
    },
    surprised: {
      Hindi: [
        {
          name: "surprised Puzzle",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3",
        },
        {
          name: "HA HA ",
          url: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
        },
        { name: "Song 3", url: "https://example.com/song3" },
      ],
      English: [
        {
          name: "Billy Joel - Surprises",
          url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/surprised/Billy%20Joel%20-%20Surprises%20(Audio).mp3?raw=true",
        },
        { name: "Louis Armstrong - What A Wonderful World ", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/surprised/Louis%20Armstrong%20-%20What%20A%20Wonderful%20World%20(Official%20Video).mp3?raw=true" },
        { name: "Surprise", url: "https://github.com/AmanSingh6574/FYP_audio_file/blob/main/english/surprised/Surprise.mp4?raw=true" },
      ],
      Marathi: [
        {
          name: "Theme",
          url: "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
        },
        { name: "Song Y", url: "https://example.com/songY" },
        { name: "Song Z", url: "https://example.com/songZ" },
      ],
    },
  };

  const handleClick = (song) => {
    setAudio(song?.url);
    setCurrentSong(song);
  };

  return (
    <div className="flex items-center justify-center w-full bg-orange-600 border border-gray-100 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20 text-bold font-quicksand">
      {selectedLanguage ? (
        <div className="flex flex-col py-8">
          <div className="px-5 text-2xl font-semibold text-center">
            Playlist for {selectedLanguage}
          </div>
          <div className="px-3 mb-1 font-bold text-center text-gray-200">
            Currently playing: {currentSong?.name}
          </div>
          <div className="w-full px-5">
            <ul className="flex flex-col">
              {playlists?.[emotion]?.[selectedLanguage].map((song, index) => (
                <li
                  key={index}
                  className="flex items-center py-2 text-xl font-semibold transition duration-150 cursor-pointer hover:scale-105 group"
                >
                  <div className="text-lg">
                    {index + 1}
                    {"."}
                  </div>
                  <div
                    href={song.url}
                    rel="noopener noreferrer"
                    className="flex items-center gap-5"
                  >
                    <div onClick={() => handleClick(song)} className="text-lg">
                      {song.name}
                    </div>
                    <span className={`hidden group-hover:inline-flex`}>
                      <img
                        src="/play_pause.png"
                        alt="currently music playing indicator"
                        className="w-6 h-6"
                      />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-full mb-2 text-lg font-semibold text-center">
          Select a language
        </div>
      )}
    </div>
  );
};

export default SelectMusic;
