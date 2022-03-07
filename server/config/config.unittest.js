// 'use strict';

// const path = require('path');

// module.exports = appInfo => {
//   const config = (exports = {});

//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1575812978932_7706';

//   // add your config here
//   config.middleware = [ 'httpLog' ];

//   config.httpLog = {
//     type: 'all',
//   };
//   /**
//    * 允许主机
//    */
//   config.allowHosts = [ 'localhost:8000', '127.0.0.1:8000' ];
//   /**
//    * 接口限制
//    */
//   config.interfaceLimit = {
//     maxCount: 30,
//     time: 3 * 1000,
//   };
//   /**
//    * 接口缓存
//    */
//   config.interfaceCache = {
//     expire: 10,
//     include: [ '/api/user/detail' ],
//   };
//   /**
//    * 安全
//    */
//   config.security = {
//     csrf: {
//       enable: false,
//     },
//   };
//   /**
//    * 存储
//    */
//   config.static = {
//     prefix: '/assets/',
//     dir: path.join(appInfo.baseDir, 'app/assets'),
//   };
//   /**
//    * session
//    */
//   config.session = {
//     key: 'MUKE_SESS',
//     httpOnly: true,
//     maxAge: 1000 * 5,
//     renew: true,
//   };
//   /**
//    * 认证
//    */
//   config.auth = {
//     exclude: [ '/api/user/login', '/api/users/register' ],
//   };

//   config.mysql = {
//     app: true,
//     agent: false,
//     client: {
//       host: '127.0.0.1',
//       port: '3306',
//       user: 'root',
//       password: '123456',
//       database: 'egg',
//     },
//   };

//   config.sequelize = {
//     dialect: 'mysql',
//     host: '127.0.0.1',
//     user: 'root',
//     password: '123456',
//     database: 'egg_house',
//     define: {
//       timestamps: false,
//       freezeTableName: true,
//     },
//   };

//   config.jwt = {
//     secret: 'muke',
//   };

//   config.redis = {
//     client: {
//       port: 6379,
//       host: '127.0.0.1',
//       // password:''
//       db: 0,
//     },
//   };

//   const userConfig = {
//     salt: 'muke',
//     redisExpire: 60 * 60 * 24,
//   };

//   config.auth = {
//     exclude: [ '/api/user/login', '/api/user/register' ],
//   };

//   return {
//     ...config,
//     ...userConfig,
//   };
// };
