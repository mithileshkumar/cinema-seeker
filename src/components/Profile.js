import './Profile.css';

/**
 * Component for showing profile picture along with name.
 * This component will not be visible on mobile devices.
 */
const Profile = (props) => {
    return (
        <div className='profile-container'>
            <img className='profile-image' width='150' height='150' src={props.image} />
            <span className='profile-name'>{props.name}</span>
        </div>
    )
};

export default Profile;