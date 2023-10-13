import { useState, useEffect } from "react"
import { Switch } from 'antd'

const MyComponent = () => {

    useEffect(()=> {
        console.log("组件进入")
        return () => {console.log("组件退出")} // 类似两种生命周期
    })

    return (
        <div>Hello, Recat</div>
    )
}

const App = () => {

    const [show, setShow] = useState(true)

    return (
        <>  
            { show && <MyComponent /> }
            <Switch defaultChecked onChange={(checked)=>{setShow(checked)}} />
        </>
    )
}

export default App