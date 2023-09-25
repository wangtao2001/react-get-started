import PropType from 'prop-types'

const Hello = ({age}) => { // 组件属性默认值
    return (
        <div>Hello, {age}</div>
    )
}

Hello.propTypes = {
    age: PropType.oneOfType([
        PropType.number, PropType.string // 类似TS的联合类型，还有其他很多方式 JSX是element类型
    ]), // 安装prop-types模块
    name: PropType.oneOf(['aa', 'bb']) // 只能是指定值
}

export default function App() {
    return (
        <div>
            <Hello age={123}/>
        </div>
    )
}