import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const watch = process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
    },
    plugins: [
        typescript(),
        watch && serve(),
        watch && livereload(),
    ],
};
