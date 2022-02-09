const { build } = require('esbuild');
const liveServer = require('live-server');
const { sassPlugin } = require('esbuild-sass-plugin');

liveServer.start({
  open: true,
  port: +process.env.PORT || 8080,
  root: 'public',
  ignore: 'node_modules',
  wait: 0,
});

build({
  bundle: true,
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development',
    ),
  },
  watch: true,
  entryPoints: ['src/dev.tsx'],
  incremental: true,
  minify: process.env.NODE_ENV === 'production',
  outdir: 'public',
  sourcemap: true,
  plugins: [
    sassPlugin(),
  ],
})
  .then(() => console.log('⚡ Styles & Scripts Compiled ! ⚡'))
  .catch(() => process.exit(1));
