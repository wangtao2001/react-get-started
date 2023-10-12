import { useRef, forwardRef, useImperativeHandle } from "react"

const MyCompount = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => {
        return "aaaa"
    })

    return (
        <>  
            <div>Hello</div>
            <div>World</div>
        </>
    )
})

const App = () => {

    const myRef = useRef(null)

    const click = () => {
        console.log(myRef.current) //现在拿到的就不是DOM了，就是在useImperativeHandle中定义的返回值
        // 换句话说，useImperativeHandle可以不把ref绑定到HTML上，而是定制返回的内容
    }

    return (
        <>
        <MyCompount ref={myRef} />
        <button onClick={click} >Click me</button>
        </>
    )
}

export default App