import { useRef, forwardRef } from "react"

const MyCompount = forwardRef((props, ref) => {
    return (
        <>  
            <div ref={ref}>Hello</div>
            <div>World</div>
        </>
    )
})

const App = () => {

    const myRef = useRef(null)

    const click = () => {
        console.log(myRef.current.innerText)
    }

    return (
        <>
        <MyCompount ref={myRef} />
        <button onClick={click} >Click me</button>
        </>
    )
}

export default App