// src/components/UserResult.jsx
// Shows the user's avatat, name/login, and a link to the Github profile.
// Accepts user boject or null.

const UserResult = ({ user }) => {
    if (!user) return null; // Nothing to render if no user data yet

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
                width={64}
                height={64}
                style={{ borderRadius: '50%' }}
            />
            <div>
                <strong>{user.name || user.login}</strong>
                <div style={{ marginTop: '4px' }}>
                    <a href={user.html_url} target="_blank" rel="nonreferrer">
                        View Github profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserResult;