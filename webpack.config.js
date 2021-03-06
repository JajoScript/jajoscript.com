// Dependencias.
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

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

    // Optimización.
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    performance: {
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js|jsx');
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
                test: /\.(svg|jpg|gif|png)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[hash].[ext]',
                }
            },

            // Assets - PDF.
            {   
                test: /(\.pdf)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/files/[name].[ext]',
                }
            },

        ]
    },

    // Configuración de plugins.
    plugins: [
        // HTML plugin.
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './src/assets/icons/logo.svg',
        }),
        
        // CSS PLUGIN.
        new miniCSSExtractPlugin(),

        // Manifest.json Plugin.
        new WebpackManifestPlugin({
            fileName: './public/manifest.json',
        })
    ]
};