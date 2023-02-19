const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    // devServer watchfiles are required 'cause by default webpack dev server didn't track html files
    devServer: {
	watchFiles: ['frontend/index.html']
    },
    entry: './frontend/app.js',
    output: {
	path: path.join(__dirname, 'backend/public'), // location
	filename: 'js/bundle.js' //new file name
    },
//    mode:'development',
      mode:'production',
    
    // css configuration
    module: {
	rules: [{
	    test: /\.css/,
	    use: [ 
		devMode ? 'style-loader': MiniCssExtractPlugin.loader,
		'css-loader'
	    ]
	}]
    },

    plugins: [
	new HtmlWebpackPlugin({
	    template: './frontend/index.html',
	    minify: { // configuration thingies :3
		collapseWhitespace: true,
		removeComments: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkAttributes: true,
		useShortDocType: true
	    }
	}),
	new MiniCssExtractPlugin({
	    filename: 'css/bundle.css'
	})
    ],
    devtool: 'source-map' // track errors more accurately
};
