import { useState, lazy, Suspense } from "react"

const MyHead = lazy(()=>import('./MyHead.tsx')) // 使用到的时候才会import

const App = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <button onClick={()=>setShow(!show)}>切换</button>
            <Suspense fallback={<p>Loading....</p>}> {/* 有一个loading的过程，因为lazy里面是一个promise异步执行的过程 */}
                {show && <MyHead />}
            </Suspense>
        </>
    )
}

export default App