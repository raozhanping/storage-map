import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
const packageJson = require('./package.json')

const isProd = process.env.NODE_ENV === 'production'

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  postcss(),
]

if (isProd) {
  plugins.push(terser())
}

export default {
  context: path.resolve(__dirname, 'src'),
  input: ['src/index.ts'],
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  preserveModules: false,
  plugins: plugins,
}
