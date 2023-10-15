import { memo, useState } from 'react'

const A = () => {
    return <div>{Math.random()}</div>
}
 
const B = memo(() => {
    return <div>{Math.random()}</div>
})

export default function App() {

    const [count, setCount] = useState(0)
    return (
        <>
            {count}
            <button onClick={()=>setCount(count+1)} >Click</button>
            <A/> { /* 父组件重新渲染，子组件也会跟着重新渲染 */ }
            <B/>
        </>
    )
}