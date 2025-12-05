// src/components/UserProfile.jsx
// Purpose: A simple profile card styled entirely with Tailwind utilities.

function UserProfile() {
    return (
        <div
            // Container styling requirements:
            // - Background cool gray, padding, max-width, centered, rounded, shadow
            className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg"
        >
            <img
                // Image styling:
                // - Circular image, fixed size (150px ~ w-36 h-36), centered
                src="https://via.placeholder.com/150"
                alt="User"
                className="rounded-full w-36 h-36 mx-auto" 
            />

            <h1
                // Heading styling:
                // - Larger font, deep blue color, vertical margins
                className="text-xl text-blue-800 my-4 text-center"
            >
                Benjamin Dices
            </h1>

            <p
                // Paragraph stling:
                // - Gray text color, base font size, center for neat card layout
                className="text-gray-600 text-base text-center"
            >
                Developer at Microsoft. Loves to write code and explore new technologies.
            </p>
        </div>
    );
}

export default UserProfile;