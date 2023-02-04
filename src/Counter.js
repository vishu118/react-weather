import React, { useState } from 'react'

function Counter() {
    let [count,setcount] = useState(0)

function increase(){
   setcount(count++) 
}

function decrease(){
    
   setcount(count--)
}
function reset(){
    
   setcount(0)
}

  return (
<div>
<h1>Counter</h1>
<h3>{count}</h3>
<button onClick={increase}>Increase</button>
<button onClick={decrease}>Decrease</button>
<button onClick={reset}>Reset</button>
<form>
     <input type="text" placeholder='name'/>
</form>

</div>
    
    

  )
}

export default Counter