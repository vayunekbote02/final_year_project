import { Link } from "react-router-dom";

const AppReport = () => {
  return (
    <div className="flex flex-col h-screen gradient-bg">
      <div className="flex items-center justify-between gap-3 px-6 py-4 bg-white shadow-md bg-opacity-10">
        <nav className="text-5xl font-extrabold text-gray-100 font-quicksand">
          App Report
        </nav>
        <Link to="/">
          <button className="px-4 py-2 text-white bg-red-500 rounded-lg shadow-lg cursor-pointer hover:bg-red-400 hover:shadow-none">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppReport;
