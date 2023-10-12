import { useState } from 'react'
import { Button, Switch } from 'antd'

const Counter = ({style}: {style? : {display: string}}) => {
    
    const [count, setCount] = useState(0)
    
    return (
        <Button style={style} type="primary" onClick={()=>setCount(count+1)}>count：{count}</Button>
    )
}

const App = () => {
    const [show, setShow] = useState(true)
    const onChange = () => {
        setShow(!show)
    }

    // 类似v-if和v-show

    return (
        <>
        <Switch onChange={onChange}/>
        {show ? <Counter/> : <Counter style={{display: 'none'}}/>}
        {show ? <Counter /> : <></>}
        {show ? <Counter key='1' /> : <Counter key='2'/>} {/* 前后组件的key不同，状态也会被重置 */}
        </>
    )
}

export default App