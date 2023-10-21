import { Card, Button } from "antd"
import { useState } from 'react'

const useBoolean = (defaultValue: boolean = false): [boolean, {toggle: ()=>void, setTrue: ()=>void, setFalse:()=>void}] => {
    const [state, setState] = useState(defaultValue)
    const actions = {
        toggle() {
            setState(!state)
        },
        setTrue() {
            setState(true)
        },
        setFalse() {
            setState(false)
        }
    }
    return [state, actions]
}

const App = () => {

    const [state, {toggle, setTrue, setFalse}] = useBoolean(false)
    return (
        <>
            <Card>{state + ''}</Card>
            <Button onClick={toggle} >toggle</Button>
            <Button onClick={setTrue} >toggle</Button>
            <Button onClick={setFalse} >toggle</Button>
        </>
    )
}

export default App