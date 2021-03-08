import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import babel from '@babel/core';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      adapters: '/src/adapters',
      domain: '/src/domain',
      ports: '/src/ports',
      ui: '/src/ui',
    },
  },
  server: {
    // open: true,
  },
  plugins: [
    {
      name: 'babel',
      enforce: 'pre',
      transform(code, id) {
        if (!id.endsWith('.ts') && !id.endsWith('.tsx')) {
          return;
        }
        return new Promise((res, rej) => {
          babel.transform(
            code,
            {
              filename: id,
              babelrc: false,
              plugins: [
                '@babel/plugin-syntax-typescript',
                [
                  'jpex/babel-plugin',
                  {
                    pathAlias: {
                      adapters: '/src/adapters',
                      domain: '/src/domain',
                      ports: '/src/ports',
                    },
                    omitIndex: true,
                  },
                ],
              ],
            },
            (err, result) => {
              if (err) {
                return rej(err);
              }
              res({
                code: result.code,
              });
            },
          );
        });
      },
    },
    reactRefresh(),
  ],
});
