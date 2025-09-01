import { useEffect, useState } from "react";

const moviesList = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  const [selectedGenre, setSelectedGenre] = useState(""); 

  return (
    <div className="container">
      <h1>Filtra Film per Genere</h1>

      {/* Menu a tendina */}
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">Seleziona Genere</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      {/* Lista film */}
      <ul>
        {moviesList.map((movie, index) => (
          <li key={index}>
            {movie.title} - <i>{movie.genre}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;