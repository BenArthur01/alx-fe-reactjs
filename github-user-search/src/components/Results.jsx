// Receives an array of users and renders a list
// Handles empty states and loading state gracefully.

import UserCard from "./UserCard";

const Results = ({ users, loading, error }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'crimson' }}>{error}</p>;
    if (!users || users.length === 0) return <p>No results yet. Try a search.</p>;

    return (
        <div style={{ display: 'grid', gap: '12px' }}>
            {users.map((u) => (
                <UserCard key={u.id} user={u} />
            ))}
        </div>
    );
};

export default Results;