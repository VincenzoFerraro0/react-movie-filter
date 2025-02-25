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
  const [genere, setGenere] = useState(""); // Stato per il genere selezionato
  const [filteredMovies, setFilteredMovies] = useState(movies);


  useEffect(() => {
    console.log("useEffect attivato");

    setFilteredMovies(
      movies.filter((movie) => {
        const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
        const matchesGenere = genere ? movie.genere === genere : true;
        return matchesSearch && matchesGenere;
      })
    );
  }, [search, genere, movies]);

  return (
    <>
      {/* Sezione per l'input della ricerca */}
      <div className="container mt-5 w-50">
        <h1>Film</h1>

        {/* Input per la ricerca dei film */}
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Cerca film"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Aggiorna lo stato "search" al cambiamento del valore
          />
        </div>

        {/* Selezione per il filtro dei generi */}
        <div className="mt-3">
          <select className="form-control" value={genere} onChange={(e) => setGenere(e.target.value)}>
            <option value="">Tutti i generi</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
        </div>
      </div>

      {/* Lista dei film filtrati */}
      <ul className="list-group mt-3">
        {filteredMovies.map((movie, index) => (
          <li key={index} className="list-group-item">
            {movie.title} - <strong>{movie.genere}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
