module.exports = {
	entry: [
		'./src/index.jsx',
		// './src/style/style.css'
	],
	output: {
		path: __dirname,
		publicPath: "/",
		filename: 'bundle.js' 
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-1']
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
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};
