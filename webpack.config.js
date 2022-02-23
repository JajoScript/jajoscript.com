// Dependencias.
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');

// Configuraciones.
module.exports = {
    // Archivo de entrada.
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },

        shared: ['react', 'react-dom'],
    },

    // Archivo de salida.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    // Extensiones de archivos.
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    // Configuración de modulos.
    module: {
        rules: [
            // Archivos JS y JSX.
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

            // Archivos HTML.
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },

            // Archivos CSS.
            {
                test: /\.css$/,
                use: [
                    miniCSSExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },

            // Assets.
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[hash].[ext]',
                }
            }
        ]
    },

    // Configuración de plugins.
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './src/assets/icons/logo.svg',
        }),
    
        new miniCSSExtractPlugin(),
    ]
};