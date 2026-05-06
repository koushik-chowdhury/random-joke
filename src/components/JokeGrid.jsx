import JokeCard from "./JokeCard";
import "../styles/grid.css";

const JokeGrid = ({ jokes }) => {
  return (
    <div className="grid">
      {jokes.map((joke) => (
        <JokeCard
          key={joke.id}
          joke={joke}
        />
      ))}
    </div>
  );
};

export default JokeGrid;