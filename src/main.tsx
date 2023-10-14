//import React from 'react' // 核心模块
import ReactDOM from 'react-dom/client' // 操作DOM模块
// client 客户端 server SSR服务端渲染
import App from './hooks/13_context深层传递数据'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
