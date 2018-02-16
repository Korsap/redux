const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);
const port = 3000;

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/index.html')
});

app.listen(port, (error) => {
	if (error) {
		console.error(error)
	} else {
		console.info('==> Listening on port %s Open up http://localhost:%s/ in your browser.', port, port)
	}
});