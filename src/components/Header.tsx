
const Header = () => {
    return (
        <div>
            <h1 className="text-center text-3xl text-blue-700 p-2 m-2 font-bold">
                Track Your Health
            </h1>
            <p className="text-center text-violet-600 mt-1 p-2">
                Calculate your BMI and stay fit with our simple tool.
            </p>
            <button className="block mx-auto px-6 py-2 rounded-2xl mt-2 mb-4
                             bg-blue-700 text-slate-50 hover:bg-blue-500 transition">
                Get Started
            </button>
        </div>
    );
};

export default Header;