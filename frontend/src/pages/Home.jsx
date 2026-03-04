import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    { id: 1, title: "The Shawshank Redemption", release_date: "1994-09-23" },
    { id: 2, title: "The Godfather", release_date: "1972-03-24" },
    { id: 3, title: "The Dark Knight", release_date: "2008-07-18" },
    { id: 4, title: "Pulp Fiction", release_date: "1994-10-14" },
    { id: 5, title: "Fight Club", release_date: "1999-10-15" },
    { id: 6, title: "Inception", release_date: "2010-07-16" },
    { id: 7, title: "The Matrix", release_date: "1999-03-31" },
    { id: 8, title: "Forrest Gump", release_date: "1994-07-06" },
  ];

  const onSearchSubmit = (event) => {
    event.preventDefault();
    alert(`Search ${searchTerm} submitted`);
  };

  return (
    <div className="home">
      <form onSubmit={onSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
