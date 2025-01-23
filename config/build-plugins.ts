import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin, HotModuleReplacementPlugin, DefinePlugin } from 'webpack';
import { BuildOptions } from './types/config';

const buildPlugins = (options: BuildOptions) => {
  const { paths, isDev } = options

  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin(),
    new ProgressPlugin(),
    new DefinePlugin({
      '__IS_DEV__': isDev,
    }),
    new HotModuleReplacementPlugin()
  ]
}

export default buildPlugins;
