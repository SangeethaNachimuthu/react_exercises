

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Card = ({image, category, title, description}) => {
    return (
        <div className="mx-auto mt-2 mb-0 bg-white p-6 rounded-lg shadow-md w-72
                          hover:scale-105 transition duration-300">
            <img src={image}
                 alt={title}
                 className="rounded-lg mb-2 w-60 h-40"
            />
            <span className="text-gray-500 pb-4">
                Category: {category}
            </span>
            <h3 className="text-lg font-bold mb-2">
                {title}
            </h3>
            <p className="text-gray-600 text-sm">
                {description}
            </p>
        </div>
    );
};

export default Card;