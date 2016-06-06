path = require('path')
const THIRD_PARTY = [ /node_modules/, /bower_components/ ]

module.exports = {
	entry: './app/entry.js',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		root: [
			path.resolve('./app/modules'),
			path.resolve('./node_modules'),
			path.resolve('./app/bower')
		]
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: THIRD_PARTY, loader: 'babel-loader' },
			{ test: /\.css$/, loader: "style!css" },
			{ test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader : 'file-loader' }

		]
	}
}
