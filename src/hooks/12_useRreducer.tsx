import { useReducer } from 'react'
import { Button } from 'antd'

function option(count: number, action : {op : string}) {
    if (action.op === 'add') return count+1
    if (action.op === 'sub') return count-1
    else throw Error('Unknown option!')
}

export default function App() {

    const [count, dispatch] = useReducer(option, 0) // reducer统一操作状态， 不然就要写两个状态处理函数
    // useState也有immer版本

    return (
        <>
            <div>{count}</div>
            <Button onClick={() => dispatch({op: 'add'})} >Add</Button>
            <Button onClick={() => dispatch({op: 'sub'})}>Sub</Button>
        </>
    )
}