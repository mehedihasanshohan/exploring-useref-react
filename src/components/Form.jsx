import { useRef } from "react";


const Form = () => {
  const inputRef = useRef(null);


  const handleClick = () => {
    inputRef.current.focus();
    console.log("clicked", inputRef.current);
  };

  return (
    <div className="rounded-lg flex py-12 items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/10 w-full max-w-lg">
        <h2 className="text-cyan-400 text-2xl font-bold mb-6 text-center tracking-wide">
          Futuristic Input Panel
        </h2>

        <div className="flex flex-col gap-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type something..."
            className="w-full px-4 py-2 bg-white/10 text-cyan-200 placeholder-cyan-400 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition-all duration-300"
          />
          <button
            onClick={handleClick}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            🔍 Focus the Point
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
