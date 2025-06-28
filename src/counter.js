// useCounter.js
import { useState } from "react";

function useCounter() {
    const [value, setValue] = useState(0);
    const [isFirstFive, setIsFirstFive] = useState(true);

    const handleClick = () => {
        setValue(prev => {
            if (prev === 0) {
                setIsFirstFive(true);
                return 5;
            }
            if (prev === 5 && isFirstFive) {
                setIsFirstFive(false);
                return 10;
            }
            if (prev > 0) return prev - 1;
            return prev;
        });
    }
    
    return { value, handleClick };
}

export default useCounter


