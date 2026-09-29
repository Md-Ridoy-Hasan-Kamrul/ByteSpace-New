import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProd = mode === 'production';

  const apiBase = env.REACT_APP_API_BASE_URL || 'https://backend.c4r.co.uk';
  const wsBase = apiBase.replace(/^https?/, (m) => (m === 'https' ? 'wss' : 'ws'));
  // Vite uses native ESM in dev — no eval needed for source maps
  const cspScriptSrc = "'self'";

  const processEnv = {
    NODE_ENV: isProd ? 'production' : 'development',
    ...Object.fromEntries(
      Object.entries(env).filter(([key]) => key.startsWith('REACT_APP_')),
    ),
  };

  const define = Object.fromEntries(
    Object.entries(processEnv).map(([key, value]) => [
      `process.env.${key}`,
      JSON.stringify(value ?? ''),
    ]),
  );

  const devPort = parseInt(env.REACT_APP_DEV_PORT || '5173', 10);

  return {
    plugins: [
      react(),
      {
        name: 'html-csp',
        transformIndexHtml(html) {
          return html
            .replace(/%CSP_SCRIPT_SRC%/g, cspScriptSrc)
            .replace(/%API_BASE%/g, apiBase)
            .replace(/%WS_BASE%/g, wsBase);
        },
      },
    ],
    define,
    envPrefix: ['VITE_', 'REACT_APP_'],
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    server: {
      port: devPort,
      open: true,
      proxy: {
        '/api': {
          target: env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: isProd ? 'hidden' : true,
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name].[hash].js',
          chunkFileNames: 'js/[name].[hash].js',
          assetFileNames: ({ name }) => {
            if (name && name.endsWith('.css')) {
              return 'css/[name].[hash][extname]';
            }
            return 'assets/[name].[hash][extname]';
          },
          manualChunks(id) {
            if (!id.includes('node_modules')) return;
            if (/[\\/](react|react-dom|react-router-dom)[\\/]/.test(id)) {
              return 'vendor-react';
            }
            if (/[\\/](@reduxjs[\\/]toolkit|react-redux)[\\/]/.test(id)) {
              return 'vendor-redux';
            }
          },
        },
      },
    },
    publicDir: path.resolve(__dirname, 'public'),
  };
});
