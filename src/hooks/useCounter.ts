import { useState } from "react";

export interface CounterHook {
    count: number;
    increment: () => void;
    reset: () => void;
}

const useCounter = (): CounterHook => {
    const [count, setCount] = useState<number>(0);

    const increment = (): void => {
        setCount((prevCount) => prevCount + 1);
    };

    const reset = (): void => {
        setCount(0);
    };

    return { count, increment, reset };
};

export default useCounter;
