import { useState, useEffect, useRef } from 'react'
import { Card, Button } from 'antd'

const useUpdateEffect = (effect: React.EffectCallback, deps: React.DependencyList | undefined) => {
    const mounted = useRef(false)
    useEffect(()=> {
        if (!mounted.current) mounted.current = true
        else effect()
    }, deps)

    useEffect(()=> {
        return () => {
            mounted.current = false
        }
    }, [])
}

const App = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(111)
    }, [count])

    useUpdateEffect(() => {
        console.log(222)
    }, [count])

    return (
        <>
            <Card>{count}</Card>
            <Button onClick={()=>setCount(count+1)} >Click me</Button>
        </>
    )
}

export default App