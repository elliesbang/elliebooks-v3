import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 1. 배포 시 파일 경로를 제대로 찾기 위해 필수!
  base: './', 
  
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
