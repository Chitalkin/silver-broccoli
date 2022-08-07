import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { merge } from 'webpack-merge';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import commonConfig from './webpack.common.config';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const productionConfig: Configuration = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].[contenthash].min.js',
    clean: true,
  },
});

export default productionConfig;
