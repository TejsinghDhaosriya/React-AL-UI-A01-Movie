import "./App.css";
import Header from "./components/Header/header";
import MovieCard from "./components/Movie/movie";
function App() {
  return (
    <div className="App">
      <Header name="Shop" />
      <MovieCard />
    </div>
  );
}

export default App;
