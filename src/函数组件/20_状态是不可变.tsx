import { useState } from "react"

const App = () => {

    const [list, setList] = useState([
        {id:1, name: 'aaa'},
        {id:2, name: 'bbb'},
    ])

    const handleClick = () => {
        //list.push({id: 3, name: 'ccc'}) // 直接对list进行修改了
        //setList(list) // 修改状态的值没有改变时，函数组件是不会重新渲染的（内部可能会自检，需要注意）

        setList([...list, {id: 4, name: 'ddd'}])
    }

    return (
        <>
            {list.map((item) => <div key={item.id}>{item.name}</div>)}
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default App