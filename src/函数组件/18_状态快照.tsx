import { useState } from "react"

const App = () => {
    const [count, setCount] = useState(0) // useState会获取到上一次对count的更新，并赋值给count

    const handleClick = ()=>{
        setCount(count + 1)
        setCount(count + 1) // count的值都是一样的
        // setCount并不会立刻更改count的值
        console.log(count)
    }

    return (
        <>
            { count }
            <button onClick={handleClick} >Click</button>
        </>
    )
}

export default App