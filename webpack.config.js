const path=require('path');
let webpack=require('webpack');
let HtmlWebpackPlugin=require('html-webpack-plugin');
let CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.[hash:4].js',
        path:path.resolve('dist')
    },
    devServer:{
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port:8000,
        open:true,//自动打开浏览器
        hot: true,
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: {
                  loader: 'babel-loader',
                }
              },
              {
                test: /\.jsx$/,
                use: {
                  loader: 'babel-loader',
                  query: {  
                    presets: ['react', 'es2015']  
                  } 
                }
              },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    "url-loader"
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },

    plugins:[
       
        //热更新,不是刷新
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            hash:true, //会在打包好的bundle.js后面加上hash串
        }),
        new CleanWebpackPlugin('dist'),
        new webpack.HotModuleReplacementPlugin(),

    ],
};
