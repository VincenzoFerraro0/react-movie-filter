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
  
  return (
    <>
      <div className="container mt-5 w-50">
        <h1>Film</h1>
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
