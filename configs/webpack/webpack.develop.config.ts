import { Configuration as WebpackConfiguration } from 'webpack';
import { merge } from 'webpack-merge';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import commonConfig from './webpack.common.config';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const developConfig: Configuration = merge(commonConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
});

export default developConfig;
