import { BuildOptions } from '../types/config';

const buildResolvers = (options: BuildOptions) => {
  const { paths } = options;
  return {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    roots: [paths.src],
    preferAbsolute: true,
  };
};

export default buildResolvers;
