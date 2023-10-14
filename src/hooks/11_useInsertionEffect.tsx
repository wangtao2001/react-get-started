import { useInsertionEffect, useRef } from 'react'

export default function App() {

    const myRef = useRef(null)

    useInsertionEffect(() => {
        console.log(myRef.current) // null证明触发时机在渲染DOM前
        // 使用场景很少，只在css-in-js使用
        // 即先把css准备好，再渲染DOM
        const style = document.createElement('style') as HTMLStyleElement
        style.innerHTML = `
            .box {
                background-color: red;
            }
        `
        document.head.append(style)
    })


    return (
        <>
            <div className='box' ref={myRef} >Hello</div>
        </>
    )
}