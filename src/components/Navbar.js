import { NavLink } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import TvIcon from '@mui/icons-material/Tv';
import UpdateIcon from '@mui/icons-material/Update';

import './Navbar.css';

const Navbar = () => {

    return (
        <nav>
            <div className='navbar-section__movie'>

                <NavLink to="/discover">
                    <div className='navbar-item'>
                        <SearchIcon />
                        <p className='navbar-section__name'>Discover</p>
                    </div>
                </NavLink>


                <NavLink to="/" style={{ pointerEvents: 'none' }}>
                    <div className='navbar-item'>
                        <PlaylistPlayIcon />
                        <p className='navbar-section__name'>Playlist</p>
                    </div>
                </NavLink>


                <NavLink to="/" style={{ pointerEvents: 'none' }}>
                    <div className='navbar-item'>
                        <LiveTvIcon />
                        <p className='navbar-section__name'>Movie</p>
                    </div>
                </NavLink>


                <NavLink to="/" style={{ pointerEvents: 'none' }}>
                    <div className='navbar-item'>
                        <TvIcon />
                        <p className='navbar-section__name'>Tv Shows</p>
                    </div>
                </NavLink>


                <NavLink to="/" style={{ pointerEvents: 'none' }}>
                    <div className='navbar-item'>
                        <ListIcon />
                        <p className='navbar-section__name'>My List</p>
                    </div>
                </NavLink>

            </div>
            <div className='navbar-section__feature'>

                <NavLink to="/" style={{ pointerEvents: 'none' }}>
                    <div className='navbar-item'>
                        <UpdateIcon />
                        <p className='navbar-section__name'>Watch Later</p>
                    </div>
                </NavLink>


                <NavLink to="/" style={{ pointerEvents: 'none' }}>
                    <div className='navbar-item'>
                        <FavoriteBorderIcon />
                        <p className='navbar-section__name'>Recomended</p>
                    </div>
                </NavLink>

            </div>
            <div className='navbar-section__settings'>

                <NavLink to="/" style={{ pointerEvents: 'none' }}>
                    <div className='navbar-item'>
                        <SettingsIcon />
                        <p className='navbar-section__name'>Settings</p>
                    </div>
                </NavLink>


                <NavLink to="/" style={{ pointerEvents: 'none' }}>
                    <div className='navbar-item'>
                        <LogoutIcon />
                        <p className='navbar-section__name'>Logout</p>
                    </div>
                </NavLink>

            </div>
        </nav>
    )
}

export default Navbar;