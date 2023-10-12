import { useEffect, useRef } from "react"

const App = () => {

    const myRef = useRef(null)

    useEffect(()=> {
        console.log("123") // useEffect会在严格模式中触发两次
        myRef.current.innerText = "World" // useEffect处理副作用，类似生命周期函数（函数组件的最后时间：JSX渲染完成之后）
    })

    return (
        <div ref={myRef}>Hello</div>
    )
}

export default App