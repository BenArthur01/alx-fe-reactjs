// Zustand store to manage recipes
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
    recipes: [], // Initial empty list of recipes
    searchTerm: '', // Current search input
    favorites: [], // Array of favorite recipe IDs
    recommendations: [], // Array of recommendations recipes

    // Add a recipe to favorites
    addFavorite: (recipeId) =>
        set((state) => ({
            favorites: [...state.favorites, recipeId],
        })),
    
    // Remove a recipe from favorites
    removeFavorites: (recipeId) =>
        set((state) => ({
            favorites: state.favourites.filtered((id) => id !== recipeId),
         }))

    // Generate mock recommendations based on favorites
    generateRecommendations: () => {
        const { recipes, favorites } = get();
        const recommended = recipes.filter(
            (recipe) =>
                favorites.includes(recipe.id) && Math.random() > 0.5 // Random filter for demo
        );
        set({ recommendations: recommended });
    },
         
    // Update the search term
    setSearchTerm: (term) => set({ searchTerm: term }),

    // Filter recipes based on the search term
    filteredRecipe: () => {
        const { recipes, searchTerm } = get();
        return recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },
   
    // Function to add a new recipe
    addRecipe: (newRecipe) =>
        set((state) => ({
            recipes: [...state.recipes, newRecipe],
        })),
    
    // Function to delete a recipe by ID
    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),

    // Function to update a recipe by ID
    updateRecipe: (updateRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === updateRecipe.id ? updateRecipe : recipe
            ),
        })),

    // Function to set the entire recipe list (optional)
    setRecipes: (recipes) => set({ recipes }),     
}));