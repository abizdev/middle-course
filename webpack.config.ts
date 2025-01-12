import path from 'path';
import { BuildEnv, BuildMode, BuildPaths } from './config/types/config';
import buildWebpackConfig from './config/build-webpack-config';
import 'webpack-dev-server'

export default (env: BuildEnv) => {
	const mode: BuildMode = env.mode || 'development'
	const port: number = env.port || 4000

	const isDev = mode === 'development'

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'app', 'main.tsx'),
		output: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const config = buildWebpackConfig({
		mode,
		paths,
		port,
		isDev,
	})


	return config
};