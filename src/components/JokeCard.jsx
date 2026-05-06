import "../styles/jokeCard.css";

const JokeCard = ({ joke, refresh }) => {
  return (
    <div className="card">
      <div className="blob"></div>

      <div className="emoji">🤣</div>

      <p className="joke">
        {joke.content}
      </p>

      <button onClick={refresh}>
        New Joke
      </button>
    </div>
  );
};

export default JokeCard;