import { BuildOptions } from './types/config';

const buildDevServer = (options: BuildOptions) => {
  const { port } = options;

  return {
    port,
    hot: true,
    open: false,
    compress: true,
    historyApiFallback: true
  }
}

export default buildDevServer;