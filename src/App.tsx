import "./App.css";
import Header from "./components/Header/header";
import MovieCard from "./components/Movie/movie";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header name="Shop" />
      <MovieCard />
    </div>
  );
};

export default App;
