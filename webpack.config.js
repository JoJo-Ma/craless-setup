const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


// path: path.join(__dirname, '/dist')',

module.exports = {

    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /.css$/i,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      importLoaders: 1,
                      modules: true,
                    },
                  },
                ],
                include: /\.module\.css$/,
              },
        ]
    }

}