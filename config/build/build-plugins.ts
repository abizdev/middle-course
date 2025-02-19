import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin, HotModuleReplacementPlugin, DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from '../types/config';

const buildPlugins = (options: BuildOptions) => {
  const { paths, isDev } = options;

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin(),
    new ProgressPlugin(),
    new DefinePlugin({
      '__IS_DEV__': isDev,
    }),
  ];

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }));
  }

  return plugins
};

export default buildPlugins;
