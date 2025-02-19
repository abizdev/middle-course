import path from 'path';
import webpack from 'webpack';
import { BuildPaths } from '../types/config';
import { buildCssLoader } from '../build/loaders/build-css-loader';

export default ({ config }: { config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    entry: '',
    output: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config?.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push('.ts', '.tsx');

  if (!config.module) config.module = { rules: [] };

  // Ensure rules exist
  if (!config.module.rules) {
    config.module.rules = [];
  }

  // @ts-ignore
  const fileLoaderRule = config.module.rules.find((rule: webpack.RuleSetRule) =>
    rule.test instanceof RegExp && rule?.test.test('.svg')
  );

  if (fileLoaderRule) {
    // @ts-ignore
    fileLoaderRule.exclude = /\.svg$/;
  }

  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });
  // @ts-ignore
  // config?.module?.rules?.map((rule:  webpack.RuleSetRule) => {
  //   if ( /svg/.test(rule.test as string)) {
  //     return { ...rule, exclude:  /\.svg$/i }
  //   }
  //
  //   return rule
  // });
  // config?.module?.rules?.push({
  //   test: /\.svg$/i,
  //   issuer: /\.[jt]sx?$/,
  //   use: ['@svgr/webpack'],
  // })
  config?.module?.rules?.push(buildCssLoader(true));

  return config;
};
