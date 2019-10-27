import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';

export default {
    input: 'src/index.js',
    output: {
        file: 'build/index.js',
        format: 'cjs'
    },
    plugins: [
        json(),
        resolve(),
        babel({
            exclude: './node_modules/**',
            plugins: [
                '@babel/plugin-proposal-class-properties'
            ]
        }),
        scss({
            output: './build/index.css',
            failOnError: true,
        })
    ]
};