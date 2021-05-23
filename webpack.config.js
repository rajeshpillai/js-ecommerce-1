const path = require('path');
module.exports = {
  "mode": "none",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + '/dist',
    "filename": "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  "devtool": "source-map",
  "module": {
    "rules":[
      {
        "test": /\.js$/,
        "exclude": /node_modules/, 
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": ["@babel/preset-env"],
            "plugins":[
              "@babel/transform-runtime"
            ]
          }
        }
      }
    ]
  }
}



