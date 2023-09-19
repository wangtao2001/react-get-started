import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({include: '**/*.+(js|jsx|ts|tsx)'})], // 监听文件使用eslint
  css: {
    modules: {
      localsConvention: 'camelCaseOnly' // css模块化，类名转换为驼峰
    }
  }
})
