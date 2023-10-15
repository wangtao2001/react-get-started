import { useState, memo, useMemo } from 'react'

const A = memo( (props) => {
    return <div>{Math.random()} {props.list}</div>
} )

const B = memo( (props) => {
    return <div>{Math.random()} {props.msg}</div>
} )


const App = () => {
    const [count, setCount] = useState(0)
    const [msg, setMsg] = useState("Hello")
    // const list = [msg.toUpperCase(), msg.toLowerCase()]
    const list = useMemo(() => [msg.toUpperCase(), msg.toLowerCase()], [msg])
    // 如果是函数，可以用useMemo,也可以用useCallback（少一层回调）
    // useMemo(()=>()=>{console.log(msg)}, [msg])
    // useMemo(()=>{console.log(msg)}, [msg])

    setMsg

    return (
        <>  
            {count}
            <button onClick={()=>setCount(count+1)} >Click</button>
            <A list={list} /> { /* 虽然list的值没变，但是App组件重新渲染，list的内存地址变了，所以还是重新渲染 */}
            <B msg ={msg} />
        </>
    )
}

export default App