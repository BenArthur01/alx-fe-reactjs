// Import the useState hook from React
import { useState } from "react";

// Define the Counter component
function Counter() {
    // Initialize state with a default value of 0
    const [count, setCount] = useState(0);

    // Return JSX with buttons and display
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ fontSize: '20px' }}>Current Count: {count}</p>

            {/* Button to increase the count */}
            <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>
                Increment
            </button>

            {/* Button to decrease the count */}
            <button onClick={() => setCount(count - 1)} style={{margin: '5px' }}>
                Decrement
            </button>

            {/* Buttom to reset the count to 0 */}
            <button onClick={() => setCount(0)} style={{ margin: '5px' }}>
                Reset
            </button>
        </div>
    );
}

export default Counter;