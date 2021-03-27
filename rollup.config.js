import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './src/index.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: './dist/build/rxdb.js'
    },
    plugins: [
        resolve(),
        commonjs({
            include: 'node_modules/**',
        })
    ]
};