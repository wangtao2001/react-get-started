import { useLayoutEffect, useRef } from 'react'

export default function App() {

    const myRef = useRef(null)

    useLayoutEffect(() => {
        // useEffect是异步的， useLayoutEffect是同步的（阻塞DOM渲染）
        // 把DOM操作都放到useLayoutEfeect中去

        // 首先DOM渲染，useLayoutEffct拿到DOM，修改后，DOM再次渲染，最后才呈现到页面上（阻塞第一次展示）
        const div = myRef.current! as HTMLDivElement
        div.innerText = 'React'
    })

    return (
        <>
            <div ref={myRef} >Hello</div>
        </>
    )
}