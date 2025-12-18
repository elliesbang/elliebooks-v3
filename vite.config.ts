import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Cloudflare Pages에서 정적 자산 경로를 절대 경로로 맞추기
  base: '/', 
  
  plugins: [react()],
  
  resolve: {
    alias: {
      // @ 기호를 현재 폴더로 연결
      '@': path.resolve(process.cwd(), '.'),
    }
  },

  build: {
    // Cloudflare 빌드 설정과 일치해야 함
    outDir: 'dist',
  }
});
