import { useState } from "react"

const App = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount((c) => c+2) // 使用回调函数的方式更新值，注意和上一次的区别
        setCount((c) => c+2)
        console.log(count) // 仍然是上一次的快照
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default App