import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const watch = process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
    },
    plugins: [
        watch && serve(),
        watch && livereload(),
    ],
};
