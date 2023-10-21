import { Button } from "antd"
import { useState, useRef } from 'react'
import { flushSync } from 'react-dom'

const App = () => {

    const [state, setState] = useState(0)
    const div = useRef(null)

    const handleClick = () => {
        flushSync(() => { // 类型nextTick
            setState(state+1) // 会取消批处理
        })
        console.log(div.current.innerText)
    }
    return (
        <>
            <div ref={div} >{state}</div>
            <Button onClick={handleClick} >toggle</Button>
        </>
    )
}

export default App