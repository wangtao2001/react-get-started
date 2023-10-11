import { useState } from  'react'

const computed = (n: number) => {
    console.log("触发了")
    return n**2
}

const App = () => {
    

    // const [count, setCount] = useState(computed(10))
    const [count, setCount] = useState(()=>computed(10))

    const click = () => {
        setCount(count+1) // 每一次更新都会触发conputed， 所以使用惰性初始化
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={click}>Click</button>
        </>
    )
}

export default App