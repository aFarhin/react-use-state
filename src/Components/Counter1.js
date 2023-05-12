import React, { useState } from "react";

const Counter1 = () => {
    let [count, setCount] = useState({gold:0, silver:0, bronze:0});



    function increaseGold() {
       
        setCount({gold:count.gold+1, silver:count.silver, bronze:count.bronze});
       
        console.log(setCount)
    }

    function increaseSilver() {
       
            setCount({gold:count.gold, silver:count.silver+1, bronze:count.bronze});
           
    }

    function increaseBronze() {
      
            setCount({gold:count.gold, silver:count.silver, bronze:count.bronze+1});
        
    }
    function res(){
        setCount({gold:0, silver:0, bronze:0})
    }

    return (
        <div className="counter1">
        <div className="show">
            <h4>Gold: {count.gold}</h4>
            <h4>Silver: {count.silver}</h4>
            <h4>Bronze: {count.bronze}</h4>
        </div>
            <button onClick={increaseGold}>Increase Gold</button>
            <button onClick={increaseSilver}>Increase Silver</button>
            <button onClick={increaseBronze}>Increase Bronze</button>
            <button onClick={res}>Reset</button>
        </div>
    )
}

export default Counter1;