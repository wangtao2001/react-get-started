const Head = () => { // 类似插槽
    return (
        <div>Head</div>
    )
}

const Body = () => {
    return (
        <div>Body</div>
    )
}

const Page = (props) => {
    return (
        <div>
            This is Page
            {props.children} 
            {/* Children属性是自带的 */}
        </div>
    )
}

export default function App() {
    return (
        <div>
            <Page>
                <Head/>
                <Body/>
            </Page>
        </div>
    )
}