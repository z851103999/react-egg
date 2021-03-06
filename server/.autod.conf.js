'use strict';

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  test: [
    'test',
  ],
  dep: [
    'egg',
    'egg-sequelize',
    'egg-scripts',
  ],
  devdep: [
    'egg-bin',
    'autod',
    'eslint',
    'eslint-config-egg',
    'autod-egg',
  ],
  exclude: [
    './test/fixtures',
    './dist'
  ],
};
