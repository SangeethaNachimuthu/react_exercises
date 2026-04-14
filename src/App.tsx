import Header from "./components/Header.tsx";
import Card from "./components/Card.tsx";
import CardList from "./components/CardList.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    return (
        <div className="mx-auto flex flex-col items-center border-none rounded-lg
                        m-8 p-2 w-96 bg-pink-200">
          <Header/>
          <Card/>
          <CardList/>
          <Footer/>
        </div>
    );
};

export default App;