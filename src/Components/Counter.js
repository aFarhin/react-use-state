import React, { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
        console.log(count)
    }

    function decreaseCount() {
        setCount(count - 1);
        console.log(count)
    }

    function resCount() {
        setCount(0);
        console.log(count)
    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resCount}>Reset</button>
        </div>
    )
}

export default Counter;