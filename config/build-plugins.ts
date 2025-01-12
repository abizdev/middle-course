import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin } from 'webpack';
import { BuildOptions } from './types/config';

const buildPlugins = (options: BuildOptions) => {
  const { paths } = options

  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin(),
    new ProgressPlugin()
  ]
}

export default buildPlugins;