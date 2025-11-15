// Zustand store to manage recipes
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [], // Initial empty list of recipes

    // Function to add a new recipe
    addRecipe: (newRecipe) =>
        set((state) => ({
            recipes: [...state.recipes, newRecipe],
        })),
    
    // Function to set the entire recipe list (optional)
    setRecipes: (recipes) => set({ recipes }),     
}));