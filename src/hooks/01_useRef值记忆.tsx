import { useRef, useState } from "react"
import { Button } from 'antd'

const App = () => {
    const [count, setCount] = useState(0)

    const num = useRef(0)
    // ref的使用场景？清除定时器？

    const handelClick = () => {
        setCount(count+1)
        num.current++ 
        console.log(num.current)
    }

    return (
        <>
            <Button  onClick={handelClick} >{count}</Button>
            {num.current /* ref并不会重新渲染，这里变化是由于setCount使得页面重新渲染了，所以不要在这里写ref */ }
        </>
    )
}

export default App