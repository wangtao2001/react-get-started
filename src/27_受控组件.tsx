import { useState } from "react"

const App = () => {

    const [value, setValue] = useState('')
    // 表单双向绑定

    return (
        <>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        {value}
        </>
    )
}

export default App