import { useState } from "react";

function Counter(){
let [count,setCount] = useState(0)
 
function handleinc(){
    setCount(1+count)
}
function handledec(){
    if(count>0)
    setCount(count-1)
}
function handlereset(){
    setCount(0)
}




    return(
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={handleinc}>Inc</button>
            <button onClick={handledec}>Dec</button>
            <button onClick={handlereset}>Reset</button>
        </div>
    )
}
export default Counter;