import { useRequest } from "ahooks"
import axios from 'axios'
import { useState } from "react"

const getData = async (s: string) => {
    console.log(s)
    const res = await axios.get(
        'data.json'
    )
    return res.data
}

const App = () => {
    // const {data, error, loading} = useRequest(getData) // 初始调用
    const [data, setData] = useState({name: 'I dont have name'})
    const {run, error, loading, refresh} = useRequest(getData, {manual: true, onSuccess: (res, params) => {
        console.log(params)
        setData({name: res.name})
    }}) // 手动调用



    if (error) {
        return <div>failed to load</div>
    }
    if (loading) {
    return <div>loading...</div>
    }
    return (
    <>
        <button onClick={()=>run('hello, world')} >Click</button>
        <button onClick={refresh} >刷新</button> {/*刷新相当于再调用一遍run但是可以不用传参 */}
        <div>Username: {data.name}</div>
    </>
    )
}

export default App