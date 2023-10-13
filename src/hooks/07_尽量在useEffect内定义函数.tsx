import { useState, useEffect } from "react"
import { Button } from 'antd'

const App = () => {

    const [msg, setMsg] = useState('❤')
    // const log = () => { // 使用了state的函数
    //     console.log(msg)
    // }

    // useEffect(()=> {
    //     log()
    // },  [foo])

    useEffect(()=> {
        const log = () => {
            console.log(msg)
        }
        log()
    }, [msg])

    return (
        <>
            <Button onClick={()=>setMsg(msg+'🙂')} >{msg}</Button>
        </>
    )
}

export default App