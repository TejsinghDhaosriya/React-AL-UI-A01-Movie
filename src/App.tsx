import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import MovieCard from "./components/Movie/movie";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header name="Shop" />
      <MovieCard />
      <Footer/>
    </div>
  );
};

export default App;
