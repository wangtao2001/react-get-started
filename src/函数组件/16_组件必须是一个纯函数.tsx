let a: number = 1

export default function App() {
    a++ // 调用外部变量，不规范的写法
    console.log(a) // 严格模型多调用了一次
    return (
        <div>Hello</div>
    )
}