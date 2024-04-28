import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InfoPage = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const getTheme = localStorage.getItem("emotion-theme")
      ? localStorage.getItem("emotion-theme")
      : "yllo";
    setTheme(getTheme);
  }, []);

  return (
    <div
      className={`flex flex-col h-screen ${theme == "bluuee" ? "gradient-bg-bluuee" : "gradient-bg-yllo"
        }`}
    >
      <div className="flex items-center justify-between gap-3 px-6 py-4 bg-white shadow-md bg-opacity-10">
        <nav className="text-5xl font-extrabold text-gray-100 font-quicksand">
          About our app
        </nav>
        <Link to="/">
          <button
            className={`px-4 py-2 text-white ${theme == "bluuee"
              ? "bg-blue-500 hover:bg-blue-400"
              : "bg-red-500 hover:bg-red-400"
              } rounded-lg shadow-lg cursor-pointer hover:shadow-none`}
          >
            Go Home
          </button>
        </Link>
      </div>
      <hr className=" h-0.5 border-t-0 bg-white/40" />
      <div className="px-6 py-4 overflow-auto text-lg font-semibold font-quicksand">
        <div className="flex flex-wrap gap-5 items-center justify-evenly">
          <h1 className="my-3 capitalize text-3xl font-bold text-white font-quicksand">
            Our app in action
          </h1>
          <img
            src="/music_rec.png"
            alt=""
            className="w-[450px] h-[350px] py-3"
          />
        </div>
        <hr className=" h-0.5 border-t-0 bg-white/40" />
        <h1 className="my-3 capitalize flex mb-10 justify-center text-3xl font-bold text-white font-quicksand">
          How our app works
        </h1>
        <div className="flex flex-wrap gap-5 items-center justify-evenly">
          <p className="max-w-[400px]">
            In simple terms, a CNN (Convolutional Neural Network) model works by
            using sliding windows, also known as kernels or filters, to scan the
            image and recognize patterns of pixels. These patterns are then used
            to identify facial features, such as eyes, nose, and mouth.
          </p>
          <img
            src="https://editor.analyticsvidhya.com/uploads/59954intro%20to%20CNN.JPG"
            alt=""
            className="w-[550px] h-[400px] py-3"
          />
        </div>

        <div className="flex flex-wrap flex-row-reverse gap-5 justify-evenly mt-10 items-center">
          <p className="max-w-[400px]">
            When it comes to emotion detection, CNN models are trained on a large
            dataset of labeled facial expressions. Each label represents a
            specific emotion, like happiness, sadness, or anger. The model learns
            to recognize these emotions by looking for unique patterns in the
            facial features that correspond to each emotion.
          </p>

          <img
            src="https://user-images.githubusercontent.com/31125521/50575270-f501d080-0dfb-11e9-9676-8f419efdade4.png"
            alt=""
            className="w-[550px] h-[400px] py-3"
          />
        </div>

        <div className="flex mt-10 flex-wrap items-center gap-5 justify-evenly">
          <p className="max-w-[400px]">
            During the emotion detection process, the CNN model processes the
            grayscale image of the face, which helps it focus on the texture and
            shape of the face rather than the color information. The model then
            compares the patterns it detects in the facial features to the
            patterns it learned during the training phase.
          </p>

          <img
            src="https://user-images.githubusercontent.com/31125521/41507950-e121b05e-723c-11e8-89f2-d8f9348a8e86.png"
            alt=""
            className="w-[350px] h-[200px] py-3 "
          />
        </div>

        <div className="flex flex-wrap flex-row-reverse items-center mt-10 gap-5 justify-evenly">
          <p className="max-w-[400px]">
            Based on these comparisons, the model calculates the probability of
            each emotion being present in the face. Finally, it returns the
            emotion with the highest probability as the most likely emotion being
            expressed by the person in the image.
          </p>
          <img
            src="https://i.ibb.co/9p9wGWn/image.png"
            alt=""
            className="w-[350px] h-[200px] py-3 scale-110"
          />
        </div>

        <p className="mt-10 font-bold text-center mx-20">
          In summary, emotion detection using a CNN model involves scanning the
          image of a face, recognizing facial features, and comparing these
          features to learned patterns to determine the most likely emotion
          being expressed.
        </p>
      </div>
    </div>
  );
};

export default InfoPage;
