// import webpack from 'webpack';
let webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080/',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	output: {
		path: __dirname,
		publicPath: "/",
		filename: 'bundle.js' 
	},
	watch: true,
	module: {
		loaders: 
			[{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-1', 'react-hmre']
				}
			},
			{
				test: /\.css$/,
				exclude: "node_modules",
				loader: "style-loader!css-loader"
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
				loader: "url-loader?limit:30000&name-[name]-[hash].[ext]"
			}

		]
	},
	eslint: {
		failOnWarning: false,
		failOnerror: false
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		hot: true
	}
};
