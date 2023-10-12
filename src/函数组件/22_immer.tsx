import { useImmer } from 'use-immer'

const App = () => {

    const [list, setList] = useImmer([
        {id:1, name: 'aaa'},
        {id:2, name: 'bbb'},
    ])

    const handleClick = () => {
        setList(draft => {
            draft.push({id: 100, name: 'ppp'}) // 注意和useState不同，immer一般用在不可修改的变量上
        })
    }

    return (
        <>
            {list.map((item) => <div key={item.id}>{item.name}</div>)}
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default App