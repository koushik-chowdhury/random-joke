import "../styles/navbar.css";

const Navbar = ({ refresh }) => {
  return (
    <nav className="navbar">
      <h1>GiggleFeed</h1>

      <button onClick={refresh}>
        New Jokes
      </button>
    </nav>
  );
};

export default Navbar;