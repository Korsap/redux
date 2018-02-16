const path = require('path');
const webpack = require('webpack');
const YarnAddWebpackPlugin = require('yarn-add-webpack-plugin');

module.exports = {
	devtool: "cheap-module-eval-source-map",
	entry: [
		"webpack-hot-middleware/client",
		'react-hot-loader/patch',
		"babel-polyfill",
		"./src/index"
	],
	module: {
		rules: [
			{
                test: /\.js$/,
                enforce: 'pre',
                exclude: /(node_modules|bower_components)/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				include: [
					path.resolve(__dirname, "src")
				],
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['transform-runtime', 'react-hot-loader/babel']
					}
				}
			},
			{
				test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                use: ['style-loader', 'css-loader']
            }
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new YarnAddWebpackPlugin({
			dev: true
		})
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.js",
		publicPath: "/static"
	}
}