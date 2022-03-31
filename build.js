const { build } = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');
const { dependencies } = require('./package.json');

const appEntry = 'src/index.tsx';

build({
  bundle: true,
  entryPoints: [appEntry],
  external: Object.keys(dependencies),
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  platform: 'node',
  outdir: 'dist',
  target: ['esnext', 'node12.22.0'],
  plugins: [
    sassPlugin(),
  ],
});
