// import { useState } from "react";

// const Dropdown = ({ setSelectedLanguage }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleButtonClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (language) => {
//     setSelectedLanguage(language);
//     setIsOpen(false);
//   };

//   return (
//     //  yaha pe check kar z index ka agar direct 10 dala toh jab ue open nhi hai phir bhi u can click the list items 0 dalna he padega jab close hai
//     // but kabhi bhi wo playlist z index high leraha isse aise hona toh nhi chahiye ye sahi code hai
//     // but kabhi kabhi horaha kabhi kabhi nhi
//     <div className="relative flex flex-col justify-center py-6 sm:py-12">
//       {/* <div className={`relative z-${isOpen ? '10' : '0'} flex flex-col justify-center py-6 sm:py-12`}> */}
//       <div className="relative z-10 items-center w-full max-w-screen-sm mx-auto">
//         <div id="bouton" className="relative w-full group">
//           <button
//             onClick={handleButtonClick}
//             className="relative w-full py-3 pr-12 bg-yellow-100 min-w-44 focus:outline-none"
//           >
//             Select music language
//             <span className="absolute top-0 right-0 flex items-center justify-center w-12 h-full bg-yellow-200">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className={`w-6 h-6 ${isOpen ? "rotate-90" : ""}`}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="m8.25 4.5 7.5 7.5-7.5 7.5"
//                 />
//               </svg>
//             </span>
//           </button>
//           <div
//             className={`absolute flex-col ${
//               isOpen ? "transition-all opacity-100" : "opacity-0"
//             } w-full top-full bg-yellow-50 origin-top`}
//           >
//             <div
//               className="relative flex items-center justify-between w-full px-10 py-2 font-semibold transition-all duration-150 bg-yellow-100 border border-yellow-200 cursor-pointer hover:bg-yellow-200 "
//               onClick={() => handleItemClick("Hindi")}
//             >
//               Hindi
//             </div>
//             <div
//               className="relative flex items-center justify-between w-full px-10 py-2 font-semibold transition-all duration-150 bg-yellow-100 border cursor-pointer border-stone-200 hover:bg-yellow-200 "
//               onClick={() => handleItemClick("English")}
//             >
//               English
//             </div>
//             <div
//               className="relative flex items-center justify-between w-full px-10 py-2 font-semibold transition-all duration-150 bg-yellow-100 border cursor-pointer border-stone-200 hover:bg-yellow-200 "
//               onClick={() => handleItemClick("Marathi")}
//             >
//               Marathi
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

const Dropdown = ({ setSelectedLanguage, selectedLanguage }) => {
  const handleItemClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="p-4 bg-yellow-200 rounded-md font-quicksand">
      <div className="py-4 mb-3 text-xl font-bold text-center bg-yellow-400 rounded-lg ">
        Select music language
      </div>
      {/* Language options */}
      <div className="cursor-pointer">
        <div
          className="flex items-center justify-between p-4 text-lg font-semibold border-b-2 border-black hover:bg-yellow-300 group"
          onClick={() => handleItemClick("Marathi")}
        >
          <p>Marathi</p>
          <img
            src="/select_language_arrows.png"
            alt=""
            className={`w-6 h-6 group-hover:rotate-180 ${
              selectedLanguage === "Marathi" && "rotate-180 -translate-x-4"
            }`}
          />
        </div>
        <div
          className="flex items-center justify-between p-4 text-lg font-semibold border-b-2 border-black hover:bg-yellow-300 group"
          onClick={() => handleItemClick("Hindi")}
        >
          <p>Hindi</p>
          <img
            src="/select_language_arrows.png"
            alt=""
            className={`w-6 h-6 group-hover:rotate-180 ${
              selectedLanguage === "Hindi" && "rotate-180 -translate-x-4"
            }`}
          />
        </div>
        <div
          className="flex items-center justify-between p-4 text-lg font-semibold border-black hover:bg-yellow-300 group"
          onClick={() => handleItemClick("English")}
        >
          <p>English</p>
          <img
            src="/select_language_arrows.png"
            alt=""
            className={`w-6 h-6 group-hover:rotate-180 ${
              selectedLanguage === "English" && "rotate-180 -translate-x-4"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
