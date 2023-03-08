### webpack基本使用
#### 1. webpack是什么
webpack是一种前端资源构建工具、静态资源打包器
#### 2. webpack的核心概念

- entry - 打包入口
- output - 打包资源后输出的位置
- loader - 处理非javascript和json文件的工具
- plugins - 插件
- mode - 模式（开发/生产）
#### 3. 安装webpack
```shell
npm i webpack webpack-cli -g   # 全局安装
npm i webpack webpack-cli -D   # 本地安装
```
### webpack开发环境配置
#### 1. 基本配置
webpack.config.js
```javascript
const {resolve} = require('path'); // node.js路径模块，用于解析路径
module.exports = {
  // webpack有5个核心概念：入口、出口、loader、插件、模式（开发/生产）

  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build') //__dirname表示当前文件路径
  },
  // loader
  module: {
    rules: [
      
    ]
  },
  // 插件
  plugins: [

  ],
  // 模式
  mode: 'development'
}
```
运行指令：
```shell
# 切换到项目所在目录执行
webpack
```
#### 2. 打包样式资源
打包样式资源需要安装`css-loader`、`style-loader`相应的`loader`。如打包`sass`需要安装`sass`和`sass-laoder`，打包`less`需要安装`less`和`less-laoder`。

- css-loader - 将css资源加载到js模块中
- style-loader - 创建style标签，将js中的样式资源添加到head标签中
- sass-loader - 可选，将scss资源编译成css
- less-loader - 可选，将less资源编译成css

安装css-loader、style-loader、sass、sass-loader
```shell
npm i css-loader style-loader sass sass-loader -D
```

loader的配置主要写在module对象中，在rules数组中编写对象
rules数组中的对象格式如下
```javascript
{
  test: /.../, 
  use: [...]
}
```

- `test` 是一个正则表达式
- `use` 是字符串数组，每个数组项目是需要使用的loader的名字

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
module.exports = {

  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [
      // 打包css预处理器
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          // 将scss编译成css，需安装sass和sass-loader
          'sass-loader'
        ]
      },
      
      // 打包样式资源使用到loader
      // 打包css需要使用到style-loader和css-loader，需要先安装这两个包
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      
    ]
  },
  // 插件
  plugins: [

  ],
  // 模式
  mode: 'development'
}
```
#### 3. 打包HTML资源
打包html资源需要安装插件`html-webpack-plugin`
```shell
npm i html-webpack-plugin -D
```
使用方法：

1. 用require引入插件
2. 创建HtmlWebpackPlugin实例
3. HtmlWebpackPlugin()构造函数中传入html文件模板（自己手动创建的html文件，可选）

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
// 打包html资源需要使用插件html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [
      // 打包css预处理器
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          // 将scss编译成css，需安装sass和sass-loader
          'sass-loader'
        ]
      },
      
      // 打包样式资源使用到loader
      // 打包css需要使用到style-loader和css-loader，需要先安装这两个包
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  // 插件
  plugins: [
    // new HtmlWebpackPlugin(), // 创建一个空的html文件，并引入built.js
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以这个文件作为模板打包
    }),
  ],
  // 模式
  mode: 'development'
}
```
#### 4. 打包图片资源
打包图片资源需要使用`file-laoder`、`url-loader`、`html-loader`

- file-loader - 处理引入的文件
- url-loader - 处理通过url引入的文件（url-loader依赖file-loader）
- html-loader - 处理html中的图片

安装`file-laoder`、`url-loader`、`html-loader`
```shell
npm i file-loader url-loader html-loader -D
```

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
// 打包html资源需要使用插件html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [
      // 打包css预处理器
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          // 将scss编译成css，需安装sass和sass-loader
          'sass-loader'
        ]
      },
      
      // 打包样式资源使用到loader
      // 打包css需要使用到style-loader和css-loader，需要先安装这两个包
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      // 打包图片资源
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
        loader: 'url-loader',
        // loader的配置
        options: {
          // 图片大小小于8kb，就会被base64处理
          // 优点: 减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          // 给图片进行重命名
          // [hash:10]取图片的hash的前10位
          // [ext]取文件原来扩展名
          name: '[hash:10].[ext]'
        }
      },

      // 打包html中img标签引入的图片
      {
        test: /\.html/,
        use: ['html-loader']
      }

      
    ]
  },
  // 插件
  plugins: [
    // new HtmlWebpackPlugin(), // 创建一个空的html文件，并引入built.js
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以这个文件作为模板打包
    }),
  ],
  // 模式
  mode: 'development'
}
```

url-loader的配置项options

- limit - 设定转码Base64文件的大小，超过指定大小进行转码
   - 优点：减少请求数量（减轻服务器压力）
   - 缺点：图片体积会更大（文件请求速度更慢）
- esModule - true/false 是否使用es的模块化进行打包
   - esModule默认为true，解析时会出现[object Module]，解决方法就是将esModule设为false，关闭url-loader的es6模块化，使用commonjs解析

#### 5. 打包其他资源
打包出来常用的文件外成为打包其他资源如字体ttf，eot、woff等资源，需要使用`file-laoder`、可以使用排除的方法，把常用的文件格式排除掉。

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
// 打包html资源需要使用插件html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [
      // 打包css预处理器
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          // 将scss编译成css，需安装sass和sass-loader
          'sass-loader'
        ]
      },
      
      // 打包样式资源使用到loader
      // 打包css需要使用到style-loader和css-loader，需要先安装这两个包
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      // 打包图片资源
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
        // use: [
        //   'url-loader'
        // ]
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]'
        }
      },

      // 打包html中img标签引入的图片
      {
        test: /\.html$/,
        use: ['html-loader']
      },

      // 打包其他资源
      {
        // 排除常见的格式文件
        exclude: /\.(js|css|html|jsx|vue|scss|less|png|jpg|jpeg|gif|webp|svg)$/,
        loader: 'file-loader',
        // 进行自定义的配置
        options: {
          name: '[hash:10].[ext]'
        }
      }
    ]
  },
  // 插件
  plugins: [
    // new HtmlWebpackPlugin(), // 创建一个空的html文件，并引入built.js
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以这个文件作为模板打包
    }),
  ],
  // 模式
  mode: 'development'
}
```

#### 6. devServer
配置一个开发时的简单web服务器，并且具有 live reloading(实时重新加载) 功能。需要安装`webpack-dev-server`
安装`webpack-dev-server`
```shell
npm i webpack-dev-server -D
```

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
// 打包html资源需要使用插件html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [...] // 省略
  },
  // 插件
  plugins: [...], // 省略
  // devServer开发服务器
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    // 端口
    port: 3000,
    // 自动打开浏览器
    open: true
  },
  // 模式
  mode: 'development'
}
```

### webpack生产环境配置
#### 1. 提取style标签中的css样式成单独的css文件
使用style-loader处理css样式后，会把css的样式添加到style标签中，这样会造成代码冗余，所以需要把style标签中的样式提取为单独的文件，然后通过link标签引入样式文件。要实现这个需求需要安装`mini-css-extract-plugin`插件。

安装`mini-css-extract-plugin`
```javascript
npm i mini-css-extract-plugin -D
```

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取css成单独文件需要用到插件mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [
      // 打包css预处理器
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          // 将scss编译成css，需安装sass和sass-loader
          'sass-loader'
        ]
      },
      
      // 打包样式资源使用到loader
      // 打包css需要使用到style-loader和css-loader，需要先安装这两个包
      {
        test: /\.css$/,
        use: [
          // 'style-loader',  // 作用是创建style标签
          // MiniCssExtractPlugin.loader这个loader取代style-loader。作用：提取js中的css成单独文件
          MiniCssExtractPlugin.loader, 
          'css-loader',
        ]
      },
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 可以指定输出的文件名
      filename: 'built.css'
    })
  ],
  // 模式
  mode: 'development'
}
```

#### 2. css兼容性处理
css兼容性处理：postcss --> postcss-loader postcss-preset-env，帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
```javascript
"browserslist": {
  // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
  "development": [
	"last 1 chrome version",
	"last 1 firefox version",
	"last 1 safari version"
  ],
  // 生产环境：默认是看生产环境
  "production": [
	">0.2%",
	"not dead",
	"not op_mini all"
  ]
}
```

安装`postcss-loader` 、`postcss-preset-env`
```shell
npm i postcss-loader postcss-preset-env -D
```

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取css成单独文件需要用到插件mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 设置nodejs环境变量
process.env.NODE_ENV = 'development';

module.exports = {

  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [
      // 打包css预处理器
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          // 将scss编译成css，需安装sass和sass-loader
          'sass-loader'
        ]
      },
      
      // 打包样式资源使用到loader
      // 打包css需要使用到style-loader和css-loader，需要先安装这两个包
      {
        test: /\.css$/,
        use: [
          // 'style-loader',  // 作用是创建style标签
          // MiniCssExtractPlugin.loader这个loader取代style-loader。作用：提取js中的css成单独文件
          MiniCssExtractPlugin.loader, 
          'css-loader',
          /*
            postcss-loader postcss-preset-env帮postcss找到package.json中browserslist里面的配置，
            通过配置加载指定的css兼容性样式
          */
          // 使用loader的默认配置
          // 'postcss-loader',
          // 修改loader的配置
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                // postcss的插件
                require('postcss-preset-env')
              ]
            }
          }
        ]
      },
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'built.css'
    })
  ],
  // 模式
  mode: 'development'
}
```

修改package.json，增加"browserslist"节点
```javascript
"browserslist": {
  // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
  "development": [
	"last 1 chrome version",
	"last 1 firefox version",
	"last 1 safari version"
  ],
  // 生产环境：默认是看生产环境
  "production": [
	">0.2%",
	"not dead",
	"not op_mini all"
  ]
}
```

#### 3. 压缩css
使用`optimize-css-assets-webpack-plugin`插件压缩css

安装`optimize-css-assets-webpack-plugin`
```shell
npm i optimize-css-assets-webpack-plugin -D
```
webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取css成单独文件需要用到插件mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css需要使用optimize-css-assets-webpack-plugin插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [...] // 省略
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      filename: 'built.css'
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),

  ],
  // 模式
  mode: 'development'
}
```

#### 4. js语法检查——ESLint
js语法检查，需要安装eslint-loader eslint eslint-plugin-import，使用airbnb的js风格需要安装eslint-config-airbnb-base

安装loader
```shell
npm i eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import -D
```

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [
      /*
        语法检查： eslint-loader  eslint
          注意：只检查自己写的源代码，第三方的库是不用检查的
          设置检查规则：
            package.json中eslintConfig中设置~
              "eslintConfig": {
                "extends": "airbnb-base"
              }
            airbnb --> eslint-config-airbnb-base  eslint-plugin-import eslint
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复
          fix: true
        }
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // 模式
  mode: 'development'
}
```

在package.json中添加eslintConfig节点
```json
"eslintConfig": {
  "extends": "airbnb-base",
  "env": {
    "browser": true
  }
}
```

#### 5. js兼容性处理——babel
老式浏览器不支持es的语法，需要使用babel将es6的语法转换为es5的语法

- @babel/preset-env  基本js兼容性处理，只能转换基本语法，如promise高级语法不能转换
- @babel/polyfill 全部js兼容性处理，将所有兼容性代码全部引入，体积太大了
- core-js 按需加载

安装babel-loader
```shell
npm i babel-loader @babel/core @babel/preset-env @babel/polyfill core-js -D
```

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [
      /*
        js兼容性处理：babel-loader @babel/core 
          1. 基本js兼容性处理 --> @babel/preset-env
            问题：只能转换基本语法，如promise高级语法不能转换
          2. 全部js兼容性处理 --> @babel/polyfill  
            问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
          3. 需要做兼容性处理的就做：按需加载  --> core-js
      */  
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做怎么样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定core-js版本
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本的浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // 模式
  mode: 'development'
}
```

#### 6. js代码压缩
开启生产模式就会自动压缩js代码

#### 7. html代码压缩
在html-webpack-plugin中配置压缩html

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩html代码
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    })
  ],
  // 模式
  mode: 'development'
}
```

#### 8. webpack生产环境配置
webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
// 打包html资源需要使用插件html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
  },
  // css兼容性处理
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            "postcss-preset-env"
          ],
        ],
      },
    }
  }
]

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [

      // 打包样式资源使用到loader
      // 打包css需要使用到style-loader和css-loader，需要先安装这两个包
      {
        test: /\.css$/,
        use: [
          ...commonCssLoader
        ]
      },

      // 打包css预处理器
      {
        test: /\.scss$/,
        use: [
          ...commonCssLoader,
          // 将scss编译成css，需安装sass和sass-loader
          'sass-loader'
        ]
      },

      // 打包图片资源
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
        // use: [
        //   'url-loader'
        // ]
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
          esModule: false
        }
      },

      // 打包html中img标签引入的图片
      {
        test: /\.html$/,
        use: ['html-loader']
      },

      /*
        正常来讲，一个文件只能被一个loader处理。
        当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
          先执行eslint 在执行babel
      */
      // eslint - js语法处理
      {
        test: /.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },

      // babel - js兼容性处理
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {version: 3},
                targets: {
                  chrome: '60',
                  firefox: '50'
                }
              }
            ]
          ]
        }
      },

      // 打包其他资源
      {
        exclude: /\.(js|css|html|jsx|vue|scss|less|png|jpg|jpeg|gif|webp|svg)$/,
        loader: 'file-loader',
        // 进行自定义的配置
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'asset',
        }
      },
    ]
  },
  // 插件
  plugins: [
    // new HtmlWebpackPlugin(), // 创建一个空的html文件，并引入built.js
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以这个文件作为模板打包
    }),
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      filename: 'built.css'
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  // 模式
  mode: 'production'
}
```

### webpack优化配置
#### 1. webpack性能优化总结

- **开发环境性能优化**
   - 优化打包构建速度
      - HMR
   - 优化代码调试
      - source-map
- **生产环境性能优化**
   - 优化打包构建速度
      - oneOf
      - babel缓存
      - 多进程打包
      - externals
      - dll
   - 优化代码运行的性能
      - 缓存(hash-chunkhash-contenthash)
      - tree shaking
      - code split
      - 懒加载/预加载
      - pwa

#### 2. 模块替换（HMR）
模块热替换(HMR - hot module replacement)功能会在应用程序运行过程中，替换、添加或删除模块，而无需重新加载整个页面。
主要是通过以下几种方式，来显著加快开发速度：

- 保留在完全重新加载页面期间丢失的应用程序状态。
- 只更新变更内容，以节省宝贵的开发时间。
- 在源代码中 CSS/JS 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 devtools 直接更改样式。

使用HMR功能，通过配置devServer的hot属性为true即可实现。

webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
// 打包html资源需要使用插件html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

/*
  HMR: hot module replacement 热模块替换 / 模块热替换
    作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块） 
      极大提升构建速度
      
      样式文件：可以使用HMR功能：因为style-loader内部实现了~
      js文件：默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码
        注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。
      html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能）
        解决：修改entry入口，将html文件引入
*/

module.exports = {
  entry: ['./src/index.js', './src/index.html'],
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [...] //省略
  },
  // 插件
  plugins: [...],  //省略
  // 模式
  mode: 'development',

  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
    hot: true,
  }
}
```

#### 3. source-map
当 webpack 打包源代码时，可能会很难追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置。为了更容易地追踪 error 和 warning，JavaScript 提供了 source maps 功能，可以将编译后的代码映射回原始源代码。

source-map的配置方式：在devtool节点中配置即可。
webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
// 打包html资源需要使用插件html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

module.exports = {
  entry: ['./src/index.js', './src/index.html'],
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [...] // 省略
  },
  // 插件
  plugins: [...], // 省略
  // 模式
  mode: 'development',

  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
    hot: true,
  },

  devtool: 'source-map'
};
```
source-map的可选值source-map | inline-source-map | hidden-source-map | eval-source-map | nosources-source-map | cheap-source-map | cheap-module-source-map

- **source-map**：
   - map文件生成在外部
   - 错误代码准确信息 和 源代码的错误位置
- **inline-source-map**：
   - map文件内联在打包的文件内，只生成一个内联source-map
   - 错误代码准确信息 和 源代码的错误位置
- **hidden-source-map**：
   - map文件生成在外部
   -  错误代码错误原因，但是没有错误位置
   - 不能追踪源代码错误，只能提示到构建后代码的错误位置
- **eval-source-map**：
   - map文件内联在打包的文件内
   - 每一个文件都生成对应的source-map，都在eval
   - 错误代码准确信息 和 源代码的错误位置
- **nosources-source-map**：
   - map文件生成在外部
   - 错误代码准确信息, 但是没有任何源代码信息
- **cheap-source-map**：
   - map文件生成在外部
   - 错误代码准确信息 和 源代码的错误位置  
   - 只能精确的行
- **cheap-module-source-map**：
   - map文件生成在外部
   - 错误代码准确信息 和 源代码的错误位置  
   - module会将loader的source map加入

   
#### 3. oneOf
oneOf使用了优化如何使用loader的，将loader放在oneOf数组中，进行匹配使用哪个loader
webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
// 打包html资源需要使用插件html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
  },
  // css兼容性处理
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            "postcss-preset-env"
          ],
        ],
      },
    }
  }
]


module.exports = {
  entry: ['./src/index.js', './src/index.html'],
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [
      // eslint - js语法处理
      {
        test: /.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        oneOf: [
          // 打包样式资源使用到loader
          // 打包css需要使用到style-loader和css-loader，需要先安装这两个包
          {
            test: /\.css$/,
            use: [
              ...commonCssLoader
            ]
          },

          // 打包css预处理器
          {
            test: /\.scss$/,
            use: [
              ...commonCssLoader,
              // 将scss编译成css，需安装sass和sass-loader
              'sass-loader'
            ]
          },

          // 打包图片资源
          {
            test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
            // use: [
            //   'url-loader'
            // ]
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false
            }
          },

          // 打包html中img标签引入的图片
          {
            test: /\.html$/,
            use: ['html-loader']
          },

          /*
            正常来讲，一个文件只能被一个loader处理。
            当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
              先执行eslint 在执行babel
          */


          // babel - js兼容性处理
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: {version: 3},
                    targets: {
                      chrome: '60',
                      firefox: '50'
                    }
                  }
                ]
              ]
            }
          },


          // 打包其他资源
          {
            exclude: /\.(js|css|html|jsx|vue|scss|less|png|jpg|jpeg|gif|webp|svg)$/,
            loader: 'file-loader',
            // 进行自定义的配置
            options: {
              name: '[hash:10].[ext]',
              outputPath: 'asset',
            }
          },
        ]
      }
    ]
  },
  // 插件
  plugins: [
    // new HtmlWebpackPlugin(), // 创建一个空的html文件，并引入built.js
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以这个文件作为模板打包
    }),
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      filename: 'built.css'
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  // 模式
  mode: 'development',

  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
    hot: true,
    open: true
  },

  devtool: 'source-map'
};
```

#### 4. 缓存
webpack通过替换 `output.filename` 中的 substitutions 设置，来定义输出文件的名称。webpack 提供了一种使用称为 **substitution(可替换模板字符串)** 的方式，通过带括号字符串来模板化文件名。其中，`[contenthash]` substitution 将根据资源内容创建出唯一 hash。当资源内容发生变化时，`[contenthash]` 也会发生变化。
webpack.config.js配置如下：
```javascript
const {resolve} = require('path');
// 打包html资源需要使用插件html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
  },
  // css兼容性处理
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            "postcss-preset-env"
          ],
        ],
      },
    }
  }
]

module.exports = {
  entry: ['./src/index.js', './src/index.html'],
  output: {
    filename: 'built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  // loader
  module: {
    rules: [
      // eslint - js语法处理
      {
        test: /.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        oneOf: [
          // 打包样式资源使用到loader
          // 打包css需要使用到style-loader和css-loader，需要先安装这两个包
          {
            test: /\.css$/,
            use: [
              ...commonCssLoader
            ]
          },

          // 打包css预处理器
          {
            test: /\.scss$/,
            use: [
              ...commonCssLoader,
              // 将scss编译成css，需安装sass和sass-loader
              'sass-loader'
            ]
          },

          // 打包图片资源
          {
            test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
            // use: [
            //   'url-loader'
            // ]
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false
            }
          },

          // 打包html中img标签引入的图片
          {
            test: /\.html$/,
            use: ['html-loader']
          },

          /*
            正常来讲，一个文件只能被一个loader处理。
            当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
              先执行eslint 在执行babel
          */


          // babel - js兼容性处理
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: {version: 3},
                    targets: {
                      chrome: '60',
                      firefox: '50'
                    }
                  }
                ]
              ],
              // 开启babel缓存
              // 第二次构建时，会读取之前的缓存
              cacheDirectory: true
            }
          },


          // 打包其他资源
          {
            exclude: /\.(js|css|html|jsx|vue|scss|less|png|jpg|jpeg|gif|webp|svg)$/,
            loader: 'file-loader',
            // 进行自定义的配置
            options: {
              name: '[hash:10].[ext]',
              outputPath: 'asset',
            }
          },
        ]
      }
    ]
  },
  // 插件
  plugins: [
    // new HtmlWebpackPlugin(), // 创建一个空的html文件，并引入built.js
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以这个文件作为模板打包
    }),
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      filename: 'built.[contenthash:10].css'
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  // 模式
  mode: 'production',

  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
    hot: true,
    open: true
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  devtool: 'source-map'
};
```
以上配置中增加了babel缓存，和webpack缓存配置。

#### 5. Tree shaking 
_tree shaking_ 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。

有2种配置tree shaking的方式

1. 配置`webpack.config.js`的`optimization.usedExports`属性
```javascript
 optimization: {
   usedExports: true,
 },
```

2. 通过 `package.json` 的 `"sideEffects"` 属性作为标记，将文件标记为无副作用
```json
{
  "sideEffects": ["*.css", "*.scss"]
}
```

**解释 tree shaking 和 **`**sideEffects**`** **
`sideEffects` 和 `usedExports`（更多被认为是 tree shaking）是两种不同的优化方式。
`**sideEffects**`** 更为有效** 是因为它允许跳过整个模块/文件和整个文件子树。
`usedExports` 依赖于 [terser](https://github.com/terser-js/terser) 去检测语句中的副作用。它是一个 JavaScript 任务而且没有像 `sideEffects` 一样简单直接。而且它不能跳转子树/依赖由于细则中说副作用需要被评估。尽管导出函数能运作如常，但 React 框架的高阶函数（HOC）在这种情况下是会出问题的。

#### 6. 代码分离
代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。
常用的代码分离方法有三种：

- **入口起点**：使用 `entry` 配置手动地分离代码。
- **防止重复**：使用 [Entry dependencies](https://webpack.docschina.org/configuration/entry-context/#dependencies) 或者 `[SplitChunksPlugin](https://webpack.docschina.org/plugins/split-chunks-plugin)` 去重和分离 chunk。
- **动态导入**：通过模块的内联函数调用来分离代码。

**入口起点(entry point) **
webpack.config.js
```javascript
const path = require('path');

 module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
   output: {
    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```
这是迄今为止最简单直观的分离代码的方式。不过，这种方式手动配置较多，并有一些隐患：

- 如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。
- 这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。

**防止重复**
配置 `[dependOn](https://webpack.docschina.org/configuration/entry-context/#dependencies)`[ option](https://webpack.docschina.org/configuration/entry-context/#dependencies) 选项，这样可以在多个 chunk 之间共享模块
webpack.config.js
```javascript
 const path = require('path');

 module.exports = {
   mode: 'development',
   entry: {
     index: {
       import: './src/index.js',
       dependOn: 'shared',
     },
     another: {
       import: './src/another-module.js',
       dependOn: 'shared',
     },
     shared: 'lodash',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  optimization: {
    runtimeChunk: 'single',
  },
 };
```
如果我们要在一个 HTML 页面上使用多个入口时，还需设置 `optimization.runtimeChunk: 'single'`

`**SplitChunksPlugin**`** **
`[SplitChunksPlugin](https://webpack.docschina.org/plugins/split-chunks-plugin)` 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。让我们使用这个插件，将之前的示例中重复的 `lodash` 模块去除：
webpack.config.js
```javascript
  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      another: './src/another-module.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
   optimization: {
     splitChunks: {
       chunks: 'all',
     },
   },
  };
```

#### 7. 懒加载
懒加载或者按需加载，是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。

#### 8. PWA
渐进式网络应用程序(progressive web application - PWA)，是一种可以提供类似于native app(原生应用程序) 体验的 web app(网络应用程序)。PWA 可以用来做很多事。其中最重要的是，在**离线(offline)**时应用程序能够继续运行功能。

#### 9. 多进程打包
多进程打包需要安装`thread-loader`
```shell
npm i thread-loader -D
```
webpack.config.js
```javascript
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        // 在package.json中eslintConfig --> airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      // 省略一些loader
      // ...
      
      {
        oneOf: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              /* 
                开启多进程打包。 
                进程启动大概为600ms，进程通信也有开销。
                只有工作消耗时间比较长，才需要多进程打包
              */
              {
                loader: 'thread-loader',
                options: {
                  workers: 2 // 进程2个
                }
              },
            ]
          },
          // 省略一些loader
          // ...
        ]
      }
    ]
  },
  plugins: [...], // 省略
  mode: 'production',
  devtool: 'source-map'
};

```

#### 10. externals
排除一些不需要打包的库
webpack.config.js
```javascript
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'production',
  externals: {
    // 拒绝jQuery被打包进来
    jquery: 'jQuery'
  }
};

```

### 深入理解
#### 构建流程
webpack的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

1. 初始化参数：从配置文件和Shell语句中读取与合并参数，得出最终的参数；
2. 开始编译：用上一步得到的参数初始化Compiler对象，加载所有配置的插件，执行对象的run方法开始执行编译；
3. 确定入口：根据配置中的 entry 找出所有的入口文件
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
5. 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk，再把每个Chunk转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

在以上过程中，webpack会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用webpack提供的 API 改变webpack的运行结果。
