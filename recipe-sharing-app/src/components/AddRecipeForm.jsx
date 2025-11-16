// Form to add a new recipe
import { useState } from "react";
import { useRecipeStore } from "../recipeStore";

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Add recipe to store
        addRecipe({ id: Date.now(), title, description });

        // Clear form fields
        setTitle('');
        setDescription('')
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
            <h2>Add a Recipe</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                style={{ display: 'block', margin: '10px 0' }}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                style={{ display: 'block', margin: '10px 0' }}
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;