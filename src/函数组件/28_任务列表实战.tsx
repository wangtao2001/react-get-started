import { useState } from 'react'
import { useImmer } from 'use-immer'

const App = () => {
    const [inputText, setInputText] = useState('')

    const [finishedList, setFinishedList] = useImmer(['a'])
    const [unFinishedList, setUnFinishedList] = useImmer(['s'])

    const add = () => {
        setUnFinishedList(draft => {draft.push(inputText)}) // 记得带大括号
        setInputText('')
    }

    const finish = (item: string) => {
        setUnFinishedList(draft => {draft.splice(draft.indexOf(item), 1)})
        setFinishedList(draft => {draft.push(item)})
    }

    const unFinish = (item: string) => {
        setFinishedList(draft => {draft.splice(draft.indexOf(item), 1)})
        setUnFinishedList(draft => {draft.push(item)})
    }

    return (
        <div>
            <span>
                <input type='text' value={inputText} onChange={(e)=>setInputText(e.target.value)} />
                <button onClick={add} >添加任务</button>
            </span>
            <p>未完成任务</p>
            <ul>
                {unFinishedList.map(item => <li><input type='checkbox' onChange={()=>{finish(item)}}  />{item}</li>)}
            </ul>
            <p>已完成任务</p>
            <ul>
                {finishedList.map(item => <li><input type='checkbox' checked={true} onChange={()=>{unFinish(item)}} /> {item}</li>)}
            </ul>
        </div>
    )
}

export default App