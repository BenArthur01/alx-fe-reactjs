// Displays a single user'd basic info and a link to their Github profile.
// Keep it minimal and readable

const UserCard = ({ user}) => {
    return (
        <div
            style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                padding: '12px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',              
            }}
        >    
            <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                width={48}
                height={48}
                style={{ borderRadius: '50%' }}
            />
            <div>
                <strong>{user.login}</strong>
                <div style={{ marginTop: '4px' }}>
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                        View profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserCard;