import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const watch = process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
    },
    external: [
        "three",
    ],
    plugins: [
        typescript(),
        resolve(),
        watch && serve(),
        watch && livereload(),
    ],
};
