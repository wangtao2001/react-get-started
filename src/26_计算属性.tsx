import { useState } from "react"
import { Button } from 'antd'

const App = () => {
    const [count, setCount] = useState(0)
    const doubleCount = count * 2

    return (
        <>
        <Button onClick={()=>setCount(count+1)}>Click: {count} {doubleCount}</Button>
        </>
    )
}

export default App