import { useState } from "react"

const App = () => {
    const [count, setCount] = useState(0) // useState具有记忆功能，不要放到逻辑中
    return (
        <>
            <div>{count}</div>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </>
    )
}

export default App