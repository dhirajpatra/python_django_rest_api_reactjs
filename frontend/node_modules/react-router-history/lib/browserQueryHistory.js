'use strict';

exports.__esModule = true;

var _createQueryHistory = require('history-plus/lib/createQueryHistory');

var _createQueryHistory2 = _interopRequireDefault(_createQueryHistory);

var _createRouterHistory = require('./createRouterHistory');

var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createRouterHistory2.default)(_createQueryHistory2.default);