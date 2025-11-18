import { useRecipeStore } from "../recipeStore";

const FavoriteToggle = ({ recipeId }) => {
    const favorites = useRecipeStore((state) =>state.favorites);
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

    const isFavorite = favorites.includes(recipeId);

    const handleClick = () => {
        if (isFavorite) {
            removeFavorite(recipeId);
        } else {
            addFavorite(recipeId);
        }
    };

    return (
        <button onClick={handleClick} style={{marginTop: '10px' }}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    );
};

export default FavoriteToggle;