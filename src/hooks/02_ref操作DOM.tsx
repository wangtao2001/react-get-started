import { useRef } from "react"
import { Button } from 'antd'

const App = () => {

    const myRef = useRef(null)

    const click = () => {
        const d = myRef.current! as HTMLDivElement
        d.innerText = "HYYYY" // 手动修改DOM
    }

    const list = [
        {id: 1, content: 'A'},
        {id: 2, content: 'B'},
    ]

    return (
        <>
        <Button onClick={click}>Click</Button>
        <div ref={myRef} >Hello, React</div>
        <ul>
            { /*在循环中使用回调方式获取ref */}
            {list.map(item => <li key={item.id} ref={(myRef2) => {myRef2!.style.backgroundColor='red'}} >{item.content}</li>)}
        </ul>
        </>
    )
}

export default App