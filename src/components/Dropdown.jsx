const Dropdown = () => {
  return (
    <div className="relative flex flex-col justify-center py-6 sm:py-12">
      <div className="relative items-center w-full max-w-screen-sm mx-auto">
        <div id="bouton" className="relative w-full group/bouton">
          <button className="relative w-full py-3 pr-12 bg-yellow-100 min-w-44">
            Select music language
            <span className="absolute top-0 right-0 flex items-center justify-center w-12 h-full bg-yellow-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 group-hover/bouton:rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
          <div className="absolute flex-col hidden transition-all opacity-0 w-fulltop-full bg-yellow-50 origine-top group-hover/bouton:flex group-hover/bouton:opacity-100">
            <div className="relative flex items-center justify-between w-full px-10 py-6 border-b border-yellow-200">
              <div className="flex items-center h-full gap-3">
                <div className="block">
                  <img
                    src="https://i.postimg.cc/hQT2vnwD/hindi-a.png"
                    className="w-12 h-12 rounded-full "
                    alt=""
                  />
                </div>
                <div className="flex-col block mb-0">
                  <b>Hindi</b>
                </div>
              </div>
              <a
                href=""
                className="px-4 py-2 text-xs font-medium uppercase bg-yellow-400 border border-yellow-300 rounded-md text-stone-600 hover:shadow-md"
              >
                Select
              </a>
            </div>
            <div className="relative flex items-center justify-between w-full px-10 py-6 border-b border-stone-200">
              <div className="flex items-center h-full gap-3">
                <div className="block">
                  <img
                    src="https://i.postimg.cc/2bPHCy09/english-a.png"
                    className="w-12 h-12 rounded-full "
                    alt=""
                  />
                </div>
                <div className="flex-col block mb-0">
                  <b>English</b>
                </div>
              </div>
              <a
                href=""
                className="px-4 py-2 text-xs font-medium uppercase bg-yellow-400 border rounded-md border-stone-300 text-stone-600 hover:shadow-md"
              >
                Select
              </a>
            </div>
            <div className="relative flex items-center justify-between w-full px-10 py-6 border-b border-stone-200">
              <div className="flex items-center h-full gap-3">
                <div className="block">
                  <img
                    src="https://i.postimg.cc/1f1WTgnf/marathi-l.jpg"
                    className="object-cover w-12 h-12 rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex-col block mb-0">
                  <b>Marathi</b>
                </div>
              </div>
              <a
                href=""
                className="px-4 py-2 text-xs font-medium uppercase bg-yellow-400 border rounded-md border-stone-300 text-stone-600 hover:shadow-md"
              >
                Select
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
