import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import './Movies.css';

const Movies = (props) => {

    const updateMovieDetails = (imdbID) => {
        props.updateMovieDisplay(imdbID);
    }

    return (
        <div className="movies-container">
            {props.movies.map((movie, index) => (
                <div key={index} className="movies-item" onClick={() => updateMovieDetails(movie.imdbID)}>
                    <img className="movies-image" src={movie.Poster} height='200' width='150' />
                    <p className="movies-title">{movie.Title}</p>
                    <PlayCircleOutlineIcon />
                    &nbsp;&nbsp;
                    <ControlPointIcon />
                </div>
            ))}
        </div>
    )

}

export default Movies;