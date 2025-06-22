// useCounter.js

import { useState } from "react";

function useCounter() {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(pre => pre + 1)

        setValue(pre => {
            if(count === 0){
               return pre + 5
            }
            else if(count === 1){
                return pre + 5
            }
            else if(count === 2){
                return pre - 1
            }
            else if(count === 3){
                return pre - 1
            }
            else{
                return pre
            }
        })
    }
    return {value, handleClick}
}

export default useCounter


