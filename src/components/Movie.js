export default function Movie(props){
    const {Title, Year, imdbID, Type, Poster} = props
    return(
            <div key={imdbID} className="card">
                <img src={Poster} className="card-img-top" alt="Poster" />
                    <div className="card-body">
                        <p className="card-title fw-bold">
                            {Title}
                        </p>
                        <p className="card-text">
                            Announced {Year} <br/> <span className="text-muted">Type : {Type}</span>
                        </p>
                    </div>
            </div>
    )
}