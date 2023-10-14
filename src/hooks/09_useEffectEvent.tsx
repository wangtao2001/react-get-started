import { useEffect, useState } from "react"

function Chat({title, dark}: {title: string, dark: boolean}) {

    useEffect(() => {
        console.log("进入"+title+"聊天室")
        return () => {
            console.log("退出"+title+"聊天室") // 清理操作
        }
    }, [title, dark]) //  开启dark是一个Event，而title的切换是一个Effect (useEffectEvent是一个实验性特性，就不使用了)

    const darkStyle = {
        backgroundColor : 'black'
    }
    return (
        <div style={ dark ? darkStyle : {} } >{title}聊天室</div>
    )
}

export default function App() {

    const [show, setShow] = useState(true)
    const [title, setTitle] = useState("A")
    const [dark, setDark] = useState(false)

    return (
        <>
            {show && <Chat  dark={dark} title={title} />}
            <button onClick={()=>(setShow(!show))} >{show ? '隐藏': '显示'}</button>
            <button onClick={()=>(setDark(!dark))} >{dark ? '关闭黑暗模式': '开启黑暗模式'}</button>
            <select value={title} onChange={(e)=>{setTitle(e.target.value)}}>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
        </>
    )
}