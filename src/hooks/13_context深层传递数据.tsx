import { createContext, useContext, useState } from 'react'
import { Button } from 'antd'

// 类似Vue中的依赖注入
// 深层传递props

const Context = createContext('❤') // value默认值

export default function App() { // App直接向Title传值

    const [str, setStr] = useState("😊")

    return (
        <>  
            <Button onClick={()=>setStr(str+"😊")} >Click</Button>
            <div >Hello</div>
            <Context.Provider value={str}>
                <Head />
            </Context.Provider>
        </>
    )
}

function Head() {
    return (
        <>
            <div>Hello, Head</div>
            <Title />
        </>
    )
}

function Title() {

    const value = useContext(Context)

    return (
        <>
            <div>Hello, Title{value}</div>
        </>
    )
}