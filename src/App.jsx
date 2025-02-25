import { useState, useEffect } from "react";

const initialMovies = [
  { title: "Inception", genere: "Fantascienza" },
  { title: "Il Padrino", genere: "Thriller" },
  { title: "Titanic", genere: "Romantico" },
  { title: "Batman", genere: "Azione" },
  { title: "Interstellar", genere: "Fantascienza" },
  { title: "Pulp Fiction", genere: "Thriller" },
];

function App() {
  const [movies] = useState(initialMovies);
  const [search, setSearch] = useState("");



  return (
    <>
      <div className="container mt-5 w-50">
        <h1>Film</h1>

        {/* Input per la ricerca */}
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Cerca film"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>
      {/* Lista dei film filtrati */}
      <ul className="list-group mt-3">
        {movies.map((movie, index) => (
          <li key={index} className="list-group-item">
            {movie.title} - <strong>{movie.genere}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
