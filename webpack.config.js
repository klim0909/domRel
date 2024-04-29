const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Установка режима разработки
  entry: 'index.js',// Точка входа вашего приложения - JavaScript файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Папка для собранного проекта
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Загрузчики для обработки CSS файлов
      },
      {
        test: /\.html$/,
        use: ['html-loader'], // Загрузчик для обработки HTML файлов
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource', // Загрузчик для обработки изображений
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Плагин для очистки папки сборки
    new HtmlWebpackPlugin({ // Плагин для создания HTML файла
      template: 'index.html', // Шаблон HTML файла
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Корневая папка для dev-сервера
    },
    hot: true, // Включение горячей перезагрузки
  },
};
