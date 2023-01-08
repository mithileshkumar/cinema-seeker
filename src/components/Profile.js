import './Profile.css';

const Profile = (props) => {
    return (
        <div className='profile-container'>
            <img className='profile-image' width='150' height='150' src={props.image} />
            <span className='profile-name'>{props.name}</span>
        </div>
    )
};

export default Profile;