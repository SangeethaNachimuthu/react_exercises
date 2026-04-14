
const App = () => {
    return (
        <div className="mx-auto flex flex-col items-center border-none rounded-lg
                        m-8 p-2 w-80 bg-pink-200">
          <h1 className="text-3xl text-blue-700 p-2 m-2 font-bold">
            Track Your Health
          </h1>
          <p className="text-center text-violet-600 mt-1 p-2">
            Calculate your BMI and stay fit with our simple tool.
          </p>
          <button className="block mx-auto px-6 py-2 rounded-2xl mt-2 mb-4
                             bg-blue-700 text-slate-50 hover:bg-blue-500 transition">
            Get Started
          </button>

          <div className="mx-auto mt-2 mb-2 bg-white p-6 rounded-lg shadow-md w-72
                          hover:scale-105 transition duration-300">
            <h3 className="text-lg font-bold mb-2">
              BMI Info
            </h3>
            <p className="text-gray-600 text-sm">
              BMI helps you understand whether your weight is healthy for your height.
            </p>
          </div>
        </div>
    );
};

export default App;