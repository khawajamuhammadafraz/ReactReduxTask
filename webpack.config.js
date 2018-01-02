var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
    plugins: ['transform-decorators-legacy' ],
               presets: ['es2015', 'react', 'stage-1']
            }
         }
      ]
   }
}
module.exports = config;
