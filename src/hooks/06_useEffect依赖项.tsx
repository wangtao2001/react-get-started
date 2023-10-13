import { useState, useEffect } from "react"
import { Button } from 'antd'

const App = () => {

    const [count, setCount] = useState(0)
    const [msg, setMsg] = useState('❤')

    useEffect(()=> {
        console.log('1')
    }, [count]) // 初始时两个useEffect都触发（而且是触发两次），后面只有count改变才触发（内部使用的是Object.is()）

    useEffect(()=> {
        console.log('2')
    }, [msg]) // 如果是空数组，后续就不可能再次触发

    // 使用到props，状态变量，计算属性，都要添加依赖项（不能是空数组）

    return (
        <>
            <Button onClick={()=>setCount(count+1)} >{count}</Button>
            <Button onClick={()=>setMsg(msg+'🙂')} >{msg}</Button>
        </>
    )
}

export default App