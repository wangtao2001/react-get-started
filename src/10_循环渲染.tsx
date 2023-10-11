export default function App() {
    const list = [
        {id: 0, text: 'aaa'},
        {id: 1, text: 'bbb'}
    ]
    return (
        <>
        {/* 默认会将所有数据连到一起 */}
        <div>{ list.map(item => <li key={item.id}>{item.text}</li>) }</div>
        </>
    )
}