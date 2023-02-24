const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');


const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'),
  },
  }
}

module.exports = ({develop}) =>({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
  },  
  module: {
    rules: [ 
      {
        test: /\.(?:ico|gif|png|jpg|jpg|svg)$/i,
        type:'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader' 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
           miniCss.loader,
           'css-loader',
           'sass-loader',
        ]
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
  new miniCss({
    filename: 'style.css',
 }),
  ],
  ...devServer(develop),
});