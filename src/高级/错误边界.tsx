import {useState} from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const Head = () => {
    useState()() // 故意出现错误
    return (
        <div>Hello Div</div>
    )
}


const App = () => {

    return (
        <>
           <ErrorBoundary fallback={<p>Something error</p>}>
            <Head />
           </ErrorBoundary>
            <div>Hello React</div>
        </>
    )
}

export default App