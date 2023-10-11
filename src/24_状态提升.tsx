import { useState } from 'react'
import { Button } from 'antd'

const MyButton = (props) => {
    

    return (
        <Button onClick={props.onClick} >{props.count}</Button>
    )
}

const App = () => {


    const [count, setCount] = useState(0)
    const handelClick = () => {
        setCount(count +1)
    }

    return (
        <>
        <MyButton count={count} onClick={handelClick} />
        <MyButton count={count} onClick={handelClick} />
        </>
    )
}

export default App