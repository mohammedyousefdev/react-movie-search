import Movie from "./Movie";

export default function Movies(props){
    const {movies = [], search} = props
    return(
        <div className="my-grid">
            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            )) : <h4>Nothing found for {search}</h4>}
        </div>
    )
}