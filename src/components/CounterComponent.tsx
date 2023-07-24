import React from "react";
import useCounter from "../hooks/useCounter";

const CounterComponent: React.FC = () => {
    const { count, increment, reset } = useCounter();

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CounterComponent;
