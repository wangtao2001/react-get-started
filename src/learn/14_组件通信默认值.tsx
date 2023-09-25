const Hello = ({name="hhhh", age}) => { // 组件属性默认值
    return (
        <div>Hello, {name}, {age}</div>
    )
}

Hello.defaultProps = { // 也可以在这里添加
    age: 20
}


export default function App() {
    return (
        <div>
            <Hello/>
        </div>
    )
}