import ClearIcon from '@mui/icons-material/Clear';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchIcon from '@mui/icons-material/Search';

import './Searchbar.css';

const Searchbar = (props) => {
    const searchMovies = (movie) => {
        props.updateMovies(movie.target.value);
    }

    return (
        <div className='search-container'>
            <div className='input-container'>
                <SearchIcon />
                <input className='search-input' onInput={(e) => searchMovies(e)} type='search'
                    placeholder='Title, Movies, Keyword' />
                <ClearIcon />
            </div>
            <div className='input-settings'>
                <LightModeOutlinedIcon />
                <MoreVertOutlinedIcon />
            </div>
        </div>
    )
}

export default Searchbar;