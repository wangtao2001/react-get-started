export default function App() {
    const age = 22
    let content = <p>Hello</p>
    if (age > 20) {
        content = <p>React</p>
    }
    // 条件渲染：以下三种方式（短路运算只适合做单条件）
    return (
        <>
        <div>{ content }</div>
        <div>{ age>21 ? <p>JS</p> : <p>TS</p> }</div>
        <div>{ age>20 && <p>Here!</p> }</div>
        </>
    )
}