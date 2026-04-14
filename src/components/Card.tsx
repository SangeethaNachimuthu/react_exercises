
const Card = () => {
    return (
        <div className="mx-auto mt-2 mb-0 bg-white p-6 rounded-lg shadow-md w-72
                          hover:scale-105 transition duration-300">
            <h3 className="text-lg font-bold mb-2">
                BMI Info
            </h3>
            <p className="text-gray-600 text-sm">
                BMI helps you understand whether your weight is healthy for your height.
            </p>
        </div>
    );
};

export default Card;