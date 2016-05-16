npm install webpack -g
npm install webpack --save-dev

npm install react --save-dev
npm install react-dom --save-dev
npm install babel-preset-react --save-dev
npm install babel-core --save-dev
npm install babel-loader --save-dev
npm install babel-preset-es2015 --save-dev
npm install react-addons-css-transition-group --save-dev
//npm install react-addons-pure-render-mixin --save-dev
npm install react-addons-linked-state-mixin --save-dev

echo { "presets": ["react"] } > .babelrc

or in package.json
  "babel": {
	"presets": ["react"]
  }

  
  webpack.config.js
module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
			
            {test: /\.js$/, loader: "babel"}
        ]
    }
};