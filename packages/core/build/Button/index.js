"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["children", "color", "size", "disabled", "style", "onClick", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function _() {
  var styles = ".pure-material-button-contained {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  border: none;\n  border-radius: 4px;\n  padding: 0 16px;\n  min-width: 64px;\n  height: 36px;\n  vertical-align: middle;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  color: white;\n  background-color: #3E8E7E;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  font-family: var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 36px;\n  overflow: hidden;\n  outline: none;\n  cursor: pointer;\n  transition: box-shadow 0.2s; }\n\n.pure-material-button-contained::-moz-focus-inner {\n  border: none; }\n\n/* Overlay */\n.pure-material-button-contained::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: white;\n  opacity: 0;\n  transition: opacity 0.2s; }\n\n/* Ripple */\n.pure-material-button-contained::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n  padding: 50%;\n  width: 32px;\n  /* Safari */\n  height: 32px;\n  /* Safari */\n  background-color: white;\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(1);\n  transition: opacity 1s, transform 0.5s; }\n\n/* Hover, Focus */\n.pure-material-button-contained:hover,\n.pure-material-button-contained:focus {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.pure-material-button-contained:hover::before {\n  opacity: 0.08; }\n\n.pure-material-button-contained:focus::before {\n  opacity: 0.24; }\n\n.pure-material-button-contained:hover:focus::before {\n  opacity: 0.3; }\n\n/* Active */\n.pure-material-button-contained:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.pure-material-button-contained:active::after {\n  opacity: 0.32;\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0s; }\n\n/* Disabled */\n.pure-material-button-contained:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  background-color: rgba(0, 0, 0, 0.12);\n  box-shadow: none;\n  cursor: initial; }\n\n.pure-material-button-contained:disabled::before {\n  opacity: 0; }\n\n.pure-material-button-contained:disabled::after {\n  opacity: 0; }\n\n.pure-material-button-outlined {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  border: solid 1px;\n  border-color: rgba(0, 0, 0, 0.24);\n  border-radius: 4px;\n  padding: 0 16px;\n  min-width: 64px;\n  height: 36px;\n  vertical-align: middle;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  color: #3E8E7E;\n  background-color: transparent;\n  font-family: var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 34px;\n  overflow: hidden;\n  outline: none;\n  cursor: pointer; }\n\n.pure-material-button-outlined::-moz-focus-inner {\n  border: none; }\n\n/* Overlay */\n.pure-material-button-outlined::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: currentColor;\n  opacity: 0;\n  transition: opacity 0.2s; }\n\n/* Ripple */\n.pure-material-button-outlined::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n  padding: 50%;\n  width: 32px;\n  height: 32px;\n  background-color: currentColor;\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(1);\n  transition: opacity 1s, transform 0.5s; }\n\n/* Hover, Focus */\n.pure-material-button-outlined:hover::before {\n  opacity: 0.04; }\n\n.pure-material-button-outlined:focus::before {\n  opacity: 0.12; }\n\n.pure-material-button-outlined:hover:focus::before {\n  opacity: 0.16; }\n\n/* Active */\n.pure-material-button-outlined:active::after {\n  opacity: 0.16;\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0s; }\n\n/* Disabled */\n.pure-material-button-outlined:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  background-color: transparent;\n  cursor: initial; }\n\n.pure-material-button-outlined:disabled::before {\n  opacity: 0; }\n\n.pure-material-button-outlined:disabled::after {\n  opacity: 0; }\n";
  var fileName = "index_styles";
  var element = document.querySelector("style[data-sass-component='index_styles']");

  if (!element) {
    var styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

var defaultProps = {
  children: '',
  size: 'medium',
  color: 'primary',
  variant: 'text',
  disabled: false,
  style: undefined,
  onClick: undefined,
  className: ''
};

var Button = function Button(props) {
  var children = props.children,
      color = props.color,
      size = props.size,
      disabled = props.disabled,
      style = props.style,
      onClick = props.onClick,
      className = props.className,
      restProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    className: (0, _clsx["default"])('pure-material-button-contained', color || 'primary', "btn-".concat(size), className || ''),
    style: _objectSpread({}, style),
    onClick: onClick,
    disabled: disabled
  }, restProps), children);
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  children: _propTypes["default"].any
};
Button.defaultProps = defaultProps;
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9CdXR0b24vaW5kZXgudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImNoaWxkcmVuIiwic2l6ZSIsImNvbG9yIiwidmFyaWFudCIsImRpc2FibGVkIiwic3R5bGUiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwicHJvcHMiLCJyZXN0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTUEsWUFBd0IsR0FBRztBQUMvQkMsRUFBQUEsUUFBUSxFQUFFLEVBRHFCO0FBRS9CQyxFQUFBQSxJQUFJLEVBQUUsUUFGeUI7QUFHL0JDLEVBQUFBLEtBQUssRUFBRSxTQUh3QjtBQUkvQkMsRUFBQUEsT0FBTyxFQUFFLE1BSnNCO0FBSy9CQyxFQUFBQSxRQUFRLEVBQUUsS0FMcUI7QUFNL0JDLEVBQUFBLEtBQUssRUFBRUMsU0FOd0I7QUFPL0JDLEVBQUFBLE9BQU8sRUFBRUQsU0FQc0I7QUFRL0JFLEVBQUFBLFNBQVMsRUFBRTtBQVJvQixDQUFqQzs7QUFXQSxJQUFNQyxNQUE0QixHQUFHLFNBQS9CQSxNQUErQixDQUFDQyxLQUFELEVBQVc7QUFDOUMsTUFBUVYsUUFBUixHQUFxRlUsS0FBckYsQ0FBUVYsUUFBUjtBQUFBLE1BQWtCRSxLQUFsQixHQUFxRlEsS0FBckYsQ0FBa0JSLEtBQWxCO0FBQUEsTUFBeUJELElBQXpCLEdBQXFGUyxLQUFyRixDQUF5QlQsSUFBekI7QUFBQSxNQUErQkcsUUFBL0IsR0FBcUZNLEtBQXJGLENBQStCTixRQUEvQjtBQUFBLE1BQXlDQyxLQUF6QyxHQUFxRkssS0FBckYsQ0FBeUNMLEtBQXpDO0FBQUEsTUFBZ0RFLE9BQWhELEdBQXFGRyxLQUFyRixDQUFnREgsT0FBaEQ7QUFBQSxNQUF5REMsU0FBekQsR0FBcUZFLEtBQXJGLENBQXlERixTQUF6RDtBQUFBLE1BQXVFRyxTQUF2RSw0QkFBcUZELEtBQXJGOztBQUNBLHNCQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUUsc0JBQUssZ0NBQUwsRUFBdUNSLEtBQUssSUFBSSxTQUFoRCxnQkFBa0VELElBQWxFLEdBQTBFTyxTQUFTLElBQUksRUFBdkYsQ0FEYjtBQUVFLElBQUEsS0FBSyxvQkFBTUgsS0FBTixDQUZQO0FBR0UsSUFBQSxPQUFPLEVBQUVFLE9BSFg7QUFJRSxJQUFBLFFBQVEsRUFBRUg7QUFKWixLQUtNTyxTQUxOLEdBT0dYLFFBUEgsQ0FERjtBQVdELENBYkQ7O0FBZ0JBUyxNQUFNLENBQUNHLFNBQVAsR0FBbUI7QUFDakI7QUFDRjtBQUNBO0FBQ0VaLEVBQUFBLFFBQVEsRUFBRWEsc0JBQVVDO0FBSkgsQ0FBbkI7QUFRQUwsTUFBTSxDQUFDVixZQUFQLEdBQXNCQSxZQUF0QjtlQUVlVSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcclxuICBjaGlsZHJlbj86IGFueVxyXG4gIHNpemU/OiAnbWVkaXVtJyB8ICdsYXJnZScgfCAnc21hbGwnXHJcbiAgY29sb3I/OiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5J1xyXG4gIHZhcmlhbnQ/OiAnY29udGFpbmVkJyB8ICdvdXRsaW5lZCcgfCAndGV4dCdcclxuICBkaXNhYmxlZD86IGJvb2xlYW5cclxuICBzdHlsZT86IG9iamVjdFxyXG4gIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9wczpCdXR0b25Qcm9wcyA9IHtcclxuICBjaGlsZHJlbjogJycsXHJcbiAgc2l6ZTogJ21lZGl1bScsXHJcbiAgY29sb3I6ICdwcmltYXJ5JyxcclxuICB2YXJpYW50OiAndGV4dCcsXHJcbiAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gIHN0eWxlOiB1bmRlZmluZWQsXHJcbiAgb25DbGljazogdW5kZWZpbmVkLFxyXG4gIGNsYXNzTmFtZTogJycsXHJcbn07XHJcblxyXG5jb25zdCBCdXR0b246UmVhY3QuRkM8QnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgY29sb3IsIHNpemUsIGRpc2FibGVkLCBzdHlsZSwgb25DbGljaywgY2xhc3NOYW1lLCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeCgncHVyZS1tYXRlcmlhbC1idXR0b24tY29udGFpbmVkJywgY29sb3IgfHwgJ3ByaW1hcnknLCBgYnRuLSR7c2l6ZX1gLCBjbGFzc05hbWUgfHwgJycpfVxyXG4gICAgICBzdHlsZT17ey4uLnN0eWxlfX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICB7Li4ucmVzdFByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn07XHJcblxyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBJcyB0aGlzIHRoZSBwcmluY2lwYWwgY2FsbCB0byBhY3Rpb24gb24gdGhlIHBhZ2U/XHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXHJcblxyXG59O1xyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiXX0=