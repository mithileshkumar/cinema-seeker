import './MovieDetails.css';

const MovieDetails = (props) => {
    return (
        <div className='movie-details__container'>
            <div className='movie-details__image'>
                <img src={props.details.Poster} />
            </div>
            <div className='movie-details__info'>
                <p className='movie-details__title'>{props.details.Title}</p>
                <div>
                    <div className='movie-details__basic'><div>Year:</div><div>{props.details.Year}</div></div>
                    <div className='movie-details__basic'><div>Running Time:</div><div>{props.details.Runtime}</div></div>
                    <div className='movie-details__basic'><div>Directed by:</div><div>{props.details.Director}</div></div>
                    <div className='movie-details__basic'><div>language:</div><div>{props.details.Language}</div></div>
                </div>
                <p className='movie-details__plot'>{props.details.Plot}</p>
                <div className='movie-details__buttons'>
                    <button className='movie-details__play'>
                        <strong>Play Movie</strong>
                    </button>
                    <button className='movie-details__trailer'>
                        <strong> Watch Trailer </strong>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;