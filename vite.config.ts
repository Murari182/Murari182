import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

function copyStaticPortfolioDirs() {
  return {
    name: 'copy-static-portfolio-dirs',
    closeBundle() {
      const rootDir = __dirname;
      const outDir = path.resolve(rootDir, 'dist');
      for (const folder of ['css', 'js', 'assets']) {
        const src = path.resolve(rootDir, folder);
        const dest = path.resolve(outDir, folder);
        if (fs.existsSync(src)) {
          fs.cpSync(src, dest, { recursive: true });
        }
      }
      const readmeSrc = path.resolve(rootDir, 'README.md');
      if (fs.existsSync(readmeSrc)) {
        fs.cpSync(readmeSrc, path.resolve(outDir, 'README.md'));
      }
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [copyStaticPortfolioDirs()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.')
      }
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          projects: path.resolve(__dirname, 'projects.html'),
          experience: path.resolve(__dirname, 'experience.html'),
          contact: path.resolve(__dirname, 'contact.html')
        }
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {}
    }
  };
});
