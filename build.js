const { build } = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const appEntry = 'src/index.tsx';

build({
  bundle: true,
  entryPoints: [appEntry],
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  platform: 'node',
  outdir: 'dist',
  target: ['esnext', 'node12.22.0'],
  plugins: [
    nodeExternalsPlugin(),
    sassPlugin({
      type: 'style',
    }),
  ],
});
