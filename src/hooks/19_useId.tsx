import { useId} from "react"

const App = () => {

    const pass = useId() // 一般都是用在链接html元素的时候

    return (
        <>
            <form>
                <label htmlFor={pass}>Male</label>
                <input type="radio" name="sex" id={pass} />
            </form>
        </>
    )
}

export default App