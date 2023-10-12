import { useState } from "react"
import { cloneDeep } from 'lodash'

const App = () => {

    const [list, setList] = useState([
        {id:1, name: 'aaa'},
        {id:2, name: 'bbb'},
        {id:3, name: 'ccc'},
    ])

    const addItem = () => { // 添加一项
        //setList([...list, {id: Math.random(), name: 'ddd'}]) // 末尾添加
        setList([...list.slice(0,1), {id: Math.random(), name: 'fff'}, ...list.slice(1)]) // 中间添加
    }

    const deleteItem = () => { // 删除第1项
        setList([...list.slice(0,1), ...list.slice(2)]) // 总之避免修改原数组
    }

    const modifyItem = () => { // 替换第1项
        setList(list.map((item, index) => {
            if (index === 1) {
                return {...item, name: 'llll'}
            } else {
                return item
            }
        }))
    }

    const sortItem = () => { // 排序，先拷贝一份
        // const cloneList = [...list] // 浅拷贝，多层级使用深拷贝
        // cloneList.reverse()
        const cloneList = cloneDeep(list)
        cloneList.reverse()
        setList(cloneList)
    }


    const [info, setInfo] = useState({
        // username: 'xiaoming',
        username: {
            first: 'xiao', last: 'ming'
        },
        age: 20
    })

    const changeName = () => {
        // setInfo({username: 'aaa'}) 对象完全变了
        // setInfo({...info, username: 'bbb'}) // 使用扩展运算符
        setInfo({...info, username: {...info.username, last: 'hei'}}) // 多层级，或者使用深拷贝，但是深拷贝不保证性能，所以建议使用immer
    }

    return (
        <>
            {list.map((item) => <div key={item.id}>{item.name}</div>)}
            <button onClick={addItem}>Add</button>
            <button onClick={deleteItem}>Delete</button>
            <button onClick={modifyItem}>Modify</button>
            <button onClick={sortItem}>Sort</button>

            <br/>

            <div>{JSON.stringify(info)}</div>
            <button onClick={changeName}>ChangeName</button>
        </>
    )
}

export default App