var path = require('path');
var dir_js = path.resolve(__dirname, 'src');

module.exports = {
    entry: path.resolve(dir_js, 'main_esm.js'),
    output: {
        path: __dirname+'/dist',
        filename: 'bundle_babel_webpack.js'
    },
     devServer: {
        contentBase: __dirname,
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: dir_js,
            }
        ]
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};