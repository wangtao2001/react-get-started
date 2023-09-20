export default function App() {
    const str = "Hello"
    const click = (e) => {
        console.log("123")
        console.log(e) // 是一个合成的事件,可以通过nativeEvent拿到合成的对象
        // 这里事件都委托在根节点上
    }

    const click2 = (num: number) => { // 事件传参处理1
        return () => {
            console.log(num)
        }
    }

    const click3 = (num: number) => { // 事件传参处理2，更推荐
        console.log(num)
    }

    return (
        <>
        <button onClick={click}>{str}</button>
        <button onClick={click2(123)}>{str}</button>
        <button onClick={()=>click3(1233)}>{str}</button>
        <button onClick={click3}>{str}</button>
        </>
    )
}