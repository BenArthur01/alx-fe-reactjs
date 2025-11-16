// Zustand store to manage recipes
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
    recipes: [], // Initial empty list of recipes
    searchTerm: '', // Current search input

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