// import './04_全局样式.css' // 全局样式，只要引入一次，全局生效，不但限于组件内
import style from './05_局部样式.module.css' // 局部样式，需要模块引入注意命名，className也是引入的，如果className包含短横线，需要使用style['xxx-xxx']的方式引入
// 也可以直接使用驼峰，需要在vite中配置
import './06_sass.scss' // 使用预处理器，局部用法和上面一样

export default function App() {

    const myStyle = {color: 'red', fontSize: '50px'} // 行内样式，驼峰式命名
    return (
        <>
        <div className="d" style={myStyle}>Hello App</div> 
        <div className={style.d}> Hello World</div>
        <div className={style['title-div']}> Hello World</div>
        <div className='box'>AA</div>
        </>
    )
}