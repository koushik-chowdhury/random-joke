import JokeCard from "./components/JokeCard.jsx";
import Loader from "./components/Loader.jsx";
import { useJoke } from "./hooks/useJokes.js";
import "./styles/global.css";

function App() {
  const {
    joke,
    loading,
    error,
    loadJoke,
  } = useJoke();

  return (
    <div className="app">
      {loading && <Loader />}

      {error && <p>{error}</p>}

      {!loading && joke && (
        <JokeCard
          joke={joke}
          refresh={loadJoke}
        />
      )}
    </div>
  );
}

export default App;