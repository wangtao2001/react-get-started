import { createPortal } from 'react-dom'

const App = () => {

    return (
        <>
            <div>Hello</div>
            {createPortal(<p>React</p>, document.querySelector('body'))} {/* 将p传送到body下 */}
        </>
    )
}

export default App