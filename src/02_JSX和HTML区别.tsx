// import { Fragment } from 'react'

export default function App() {
    // 标签名小写，单标签闭合
    // class属性必须写成className
    // for属性必须写成htmlFor
    // 属性必须是驼峰式命名
    // 自定义属性不一定使用驼峰写法
    // 模板语法使用 {} 包裹，js表达式（包括JSX）（注意什么会被渲染，什么不会（布尔值，空字符串，null, undefind, 函数，对象），对于不能渲染的内容可以转换为字符串 +'' 或 JSON.stringfy()）
    // 属性使用 {} 渲染
    // 唯一根节点，但是可以使用 <></> 空标签包裹 或者 <Fragment></Fragment> 包裹
    // 注释写在 {} 里面
    const name = 'xxx'
    const head = <p>head</p>
    return (
        <>
            <label className={name} htmlFor="a">dd</label> 
            <input id='a' type="text" my-attr='a' className="aaa" /> 
            <p>{1+1}</p>
            {/* {注释} */}
            {head}
        </>
    )
}