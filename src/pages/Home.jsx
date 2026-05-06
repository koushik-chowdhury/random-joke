import { useJokes } from "../hooks/useJokes";
import JokeGrid from "../components/JokeGrid";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const Home = () => {
  const {
    jokes,
    loading,
    error,
    loadJokes,
  } = useJokes();

  return (
    <div>
      <Navbar refresh={loadJokes} />

      <div className="container">
        {loading && <Loader />}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <JokeGrid jokes={jokes} />
        )}
      </div>
    </div>
  );
};

export default Home;