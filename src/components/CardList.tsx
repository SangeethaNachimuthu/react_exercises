import Card from "./Card.tsx";

const CardList = () => {


    const cards = [
        {
            title: "Fitness Tracker",
            description: "Track your daily workouts and stay healthy.",
            image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
            category: "Health"
        },
        {
            title: "Healthy Diet",
            description: "Maintain a balanced diet for better life.",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
            category: "Nutrition"
        },
        {
            title: "Yoga Practice",
            description: "Improve flexibility and reduce stress.",
            image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
            category: "Wellness"
        }
    ];
    return (
        <div className="grid grid-cols-3 gap-4">
            {cards.map( (card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    category={card.category}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default CardList;