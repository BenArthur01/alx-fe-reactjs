// src/components/UserProfile.jsx
// Purpose: A simple profile card styled entirely with Tailwind utilities.
// - Base (mobile): compact spacing and  smaller text/image
// - md and above: more padding, larger text/image, wider card

function UserProfile() {
    return (
        <div
            // Container styling requirements:
            // - Background cool gray, 
            // - Padding: p-4 (mobile). md:p-8 (larger screens) 
            // - Width: max-w-xs (mobile), md:max-w-sm (larger screens) 
            // - Centering:mx-auto horizontally, my-20 vertically
            // - Shape & depth: rounded corners + shadow
            className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg"
        >
            <img
                // Image styling:
                // - Circular avatar
                // - Size: w-24 h-24 (mobile), md:w-36 h-36(Larger screens), 
                // - Centered horizontally
                src="https://via.placeholder.com/150"
                alt="User"
                className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto" 
            />

            <h1
                // Heading styling:
                // - Font size: text-lg (mobile), md:text-xl (larger screens)
                // - Color: deep blue
                // - Spacing: vertical margins for seperation
                // - Centered for neat layout
                className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 text-center"
            >
                Benjamin Dices
            </h1>

            <p
                // Paragraph styling:
                // - Font size: text-sm (mobile), md:text-base (larger screens)
                // - Color: gray for readable contrast
                // - Centered text to match card style
                className="text-sm sm:text-sm md:text-base text-gray-600 text-center"
            >
                Developer at Microsoft. Loves to write code and explore new technologies.
            </p>
        </div>
    );
}

export default UserProfile;