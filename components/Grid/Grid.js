'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _hocs = require('../hocs');

var _StyledGrid = require('./StyledGrid');

var _StyledGrid2 = _interopRequireDefault(_StyledGrid);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styledComponents = {
  div: _StyledGrid2.default
}; // tag -> styled component

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Grid.prototype.render = function render() {
    var _props = this.props,
        fill = _props.fill,
        rows = _props.rows,
        tag = _props.tag,
        rest = _objectWithoutProperties(_props, ['fill', 'rows', 'tag']);

    var StyledComponent = styledComponents[tag];
    if (!StyledComponent) {
      StyledComponent = _StyledGrid2.default.withComponent(tag);
      styledComponents[tag] = StyledComponent;
    }

    return _react2.default.createElement(StyledComponent, _extends({
      fillContainer: fill,
      rowsProp: rows
    }, rest));
  };

  return Grid;
}(_react.Component);

Grid.defaultProps = {
  tag: 'div'
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Grid);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Grid);