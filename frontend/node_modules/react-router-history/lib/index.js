'use strict';

exports.__esModule = true;

var _browserHistory = require('./browserHistory');

var _browserHistory2 = _interopRequireDefault(_browserHistory);

var _hashHistory = require('./hashHistory');

var _hashHistory2 = _interopRequireDefault(_hashHistory);

var _createMemoryHistory = require('./createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _browserQueryHistory = require('./browserQueryHistory');

var _browserQueryHistory2 = _interopRequireDefault(_browserQueryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    browserHistory: _browserHistory2.default,
    hashHistory: _hashHistory2.default,
    createMemoryHistory: _createMemoryHistory2.default,
    browserQueryHistory: _browserQueryHistory2.default
};