import React from 'react' // 核心模块
import ReactDOM from 'react-dom/client' // 操作DOM模块
// client 客户端 server SSR服务端渲染
import App from './28_任务列表实战'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
