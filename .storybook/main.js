const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
  babel: async (options) => {
    Object.assign(options.plugins.find((plugin) => plugin[0].includes('plugin-proposal-decorators'))[1], {
      decoratorsBeforeExport: true,
      legacy: false,
    });
    return options;
  },
};