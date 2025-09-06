// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // ← React プラグインを使う
  build: {
    outDir: 'build',  // 出力先を build フォルダに変更
  }
})
