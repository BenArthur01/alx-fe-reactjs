// This component receives props and displays user info
const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>   {/* Display user's name */}
            <p>Age: {props.age}</p>   {/* Display user's age */}
            <p>Bio: {props.bio}</p>   {/* Display user's bio */}
        </div>
    );
};

export default UserProfile;