export function ListOfMovies({ movies }) {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title} />
                    </li>
                ))}
        </ul>
    )
}

export function NoMoviesResults() {
    return (
        <p>No se encontraron resultados</p>
    )
}


export function Movies({ movies }) {
    const hasMovies = movies.length > 0
    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )

}