// Display the list of recipes
import { useRecipeStore } from "../recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filter());

    return (
        <div style={{ padding: '20px' }}>
            <h2>Recipe List</h2>
            {filteredRecipes.length === 0 ? (
                <p>No recipes match your search.</p>
            ) : (
                filteredRecipes.map((recipe) => (
                    <div key={recipe.id} style={{ marginBottom: '10px' }}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                        </Link>    
                    </div>
                ))        
            )}
        </div>
    );
};

export default RecipeList;