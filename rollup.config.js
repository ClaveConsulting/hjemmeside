export default {
  input: 'src/index.ts',
    output: [
  {
    file: packageJson.main,
    format: 'cjs',
    sourcemap: true,
    interop: 'compat',
  },
  {
    file: packageJson.module,
    format: 'esm',
    sourcemap: true,
    interop: 'compat',
  },
]
}
