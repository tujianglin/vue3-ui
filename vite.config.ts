import type { ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
import Delete from 'rollup-plugin-delete';

import { resolve } from 'path';

function resolvePath(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({}: ConfigEnv): UserConfig => {
  return {
    resolve: {
      alias: {
        '@': resolvePath('./src'),
      },
    },
    plugins: [
      dts({
        outputDir: 'dist',
        staticImport: true,
        insertTypesEntry: true,
      }),
      vue(),
      vueJsx(),
      vueSetupExtend(),
      createStyleImportPlugin({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => `ant-design-vue/es/${name}/style/index`,
          },
        ],
      }),
    ],
    css: {
      // css 预处理
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'ui',
        fileName: (format) => `ui.${format}.js`,
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
        plugins: [
          Delete({
            targets: ['dist/{env.d.ts}', 'dist/*.{ico,txt,html}'],
            hook: 'generateBundle',
          }),
        ],
      },
    },
  };
};
