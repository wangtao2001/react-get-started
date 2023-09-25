const Welcome = () => {
    return (
        <div>Welcome</div>
    )
}

const Qf = { // 1.对象形式
    Welcome2() {
        return (
            <div>Welcome2</div>
        )
    }
}

const Qf2 = () => {
    return (
        <div>Hello, Qf2</div>
    )
}

Qf2.Welcome3 = () => { // 2.对象形式
    return (
        <div>Welcome2</div>
    )
}


export default function App() {
    return (
        <div>
            Hello, React
            <Welcome/>
            {/* 点标记写法 -> 更好的对组件进行划分 */}
            <Qf.Welcome2/>
            <Qf2/>
            <Qf2.Welcome3/>
        </div>
    )
}