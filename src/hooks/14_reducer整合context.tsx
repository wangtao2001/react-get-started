import { useReducer, useContext, createContext } from "react"
import { Button } from 'antd'

const CountContext = createContext(0)
const CountDispachContext = createContext(null)
const countOption = (count: number, action : {op : string}) => {
    if (action.op === 'add') return count+1
    if (action.op === 'sub') return count-1
    else throw Error('Unknown option!')
}


const Head = () => {

    const count = useContext(CountContext)

    return (
        <div>The Value is: {count}</div>
    )
}

const Option = () => {
    const countDispath = useContext(CountDispachContext)
    return (
        <>
            <Button onClick={()=>countDispath({op: 'add'})} >Add</Button>
            <Button onClick={()=>countDispath({op: 'sub'})}>Sub</Button>
        </>
    )
}

const App = () => {

    const [count, countDispach] = useReducer(countOption, 100)

    // 兄弟组件通信

    return (
        <>
            <CountContext.Provider value={count}>
                <CountDispachContext.Provider value={countDispach}>
                    <Head />
                    <Option />
                </CountDispachContext.Provider>
            </CountContext.Provider>
        </>
    )
}

export default App