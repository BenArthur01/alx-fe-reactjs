import { useRecipeStore } from "../recipeStore";

const FavoritesList = () => {
    // Get favorite recipes by mapping IDs to actual objects
    const favorites = useRecipeStore((state) =>
        state.favorites.map((id) =>
            state.recipe.find((recipe) => recipe.id === id) 
        )
    );
    
    return (
        <div style={{ padding: '20px' }}>
            <h2>My Favorites</h2>
            {favorites.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                favorites.map((recipe) => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>    
                ))
            )}
        </div>
    );
};

export default FavoritesList;
