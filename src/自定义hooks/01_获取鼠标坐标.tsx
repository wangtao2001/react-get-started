import { useEffect, useState } from "react"

const useMouse = () => {
    const [state, setState] = useState({
        pageX: NaN, pageY: NaN
    })

    useEffect(() => {

        const move = (e) => {
            setState({
                pageX: e.pageX, pageY: e.pageY
            })
        }
        document.addEventListener('mousemove', move)

        return () => {
            document.removeEventListener('mousemove', move)
        }
    })

    return state
}


const App = () => {

    const mouse = useMouse()

    return (
        <h1>Hello App {mouse.pageX } {mouse.pageY}</h1>
    )
}

export default App