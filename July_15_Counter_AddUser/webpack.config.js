module.exports = {
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_moduels/,
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
}