import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import buildPlugins from './build-plugins';
import buildLoaders from './build-loaders';
import buildResolvers from './build-resolvers';
import buildDevServer from './build-dev-server';

const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, isDev, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map': undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
};

export default buildWebpackConfig;