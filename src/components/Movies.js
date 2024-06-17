import { useContext } from "react"
import MoviesContext from "./MoviesContext"

const Movies = () => {
  const {deleteMovie, movies} = useContext(MoviesContext)

  return <div>
    <h1>Movies</h1>
    {
      movies.map((oneMovie) => {
        const {id, name} = oneMovie

        return <div key={id}>
          <p>{name}</p>
          <button onClick={() => deleteMovie(id)}>Smazat</button>
        </div>
      })
    }
  </div>
}

export default Movies