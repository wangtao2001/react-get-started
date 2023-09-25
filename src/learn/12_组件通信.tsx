const Hello = (props: {name: string}) => { // 整体接受
    return (
        <div>Hello, {props.name}</div>
    )
}

const Hello2 = ({name, isShow})=> { // 解构接受
    return (
        <div>Hello, {name}, {isShow+''}</div>
    )
}

const Hello3 = ({onClick})=> { // 传递函数类型
    return (
        <div onClick={onClick}>Hello3</div>
    )
}

const Hello4 = ({a,b,c})=> { // 批量传递的接受
    return (
        <div>Hello3 {a} {b} {c}</div>
    )
}

export default function App() {

    const name='React'

    const clickHandle = () => {
        alert('ssss')
    }

    const data = {
        a: 1, b:2, c: 3
    }

    return (<>
        <Hello name='CPU'/>
        <Hello2 name={name} isShow/>
        {/* 不传值传递的就是true */}
        <Hello3 onClick={clickHandle}/>
        {/* 自定义组件是没有onclick事件的，必须要加在原生组件上 */}
        <Hello4 {...data}/>
        </>
    )
}