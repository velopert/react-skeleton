module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname,
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777
    },

    module:
    {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
