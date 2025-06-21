// useCounter.js

import { useState } from "react";

function useCounter(value = 0) {
    const [count, setCount] = useState(value)

    const increment = () => setCount(pre => pre + 5)
    const decrement = () => setCount(pre => pre - 1)
    const reset = () => setCount(value)

    return{count, increment, decrement, reset}
}

export default useCounter


