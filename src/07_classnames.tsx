import classNames from "classnames" // npm i classnames
import style from './05_局部样式.module.css'

export default function App() {

    const names = ['box1', 'box2']
    const names2 = classNames({ // 灵活控制class name
        'box3': true, 'box4': true, [style.d]: true // 配合使用局部样式
    })

    // 其他：css in js 或 tailwind css

    return (
        <>
        <div className={names.join(" ")}>Hello</div>
        <div className={names2}>App</div>
        </>
    )
}