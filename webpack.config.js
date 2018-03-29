const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		index: './src/js/index.js',
		libs: './src/js/libs.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build/js')
	},
	// devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015'],
						babelrc: false
					}
				}
			}
		]
	},
	plugins: [
		new UglifyJsPlugin({
			uglifyOptions: {
				output: {
					comments: false,
					beautify: false
				}
			}
		})
	]
};
