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
          name: "neutral Puzzle",
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
          name: "English Kangaroo Music",
          url: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
        },
        { name: "Song B", url: "https://example.com/songB" },
        { name: "Song C", url: "https://example.com/songC" },
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
          name: "happy Puzzle",
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
    angry: {
      Hindi: [
        {
          name: "angry Puzzle",
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
