"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["children", "color", "size", "disabled", "style", "onClick", "className", "variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function _() {
  var styles = ".pure-material-button-contained {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  border: none;\n  border-radius: 4px;\n  padding: 0 16px;\n  min-width: 64px;\n  vertical-align: middle;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  color: white;\n  background-color: #3E8E7E;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  font-family: var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 36px;\n  overflow: hidden;\n  outline: none;\n  cursor: pointer;\n  transition: box-shadow 0.2s; }\n\n.pure-material-button-contained::-moz-focus-inner {\n  border: none; }\n\n/* Overlay */\n.pure-material-button-contained::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: white;\n  opacity: 0;\n  transition: opacity 0.2s; }\n\n/* Ripple */\n.pure-material-button-contained::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n  padding: 50%;\n  width: 32px;\n  /* Safari */\n  height: 32px;\n  /* Safari */\n  background-color: white;\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(1);\n  transition: opacity 1s, transform 0.5s; }\n\n/* Hover, Focus */\n.pure-material-button-contained:hover,\n.pure-material-button-contained:focus {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.pure-material-button-contained:hover::before {\n  opacity: 0.08; }\n\n.pure-material-button-contained:focus::before {\n  opacity: 0.24; }\n\n.pure-material-button-contained:hover:focus::before {\n  opacity: 0.3; }\n\n/* Active */\n.pure-material-button-contained:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.pure-material-button-contained:active::after {\n  opacity: 0.32;\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0s; }\n\n/* Disabled */\n.pure-material-button-contained:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  background-color: rgba(0, 0, 0, 0.12);\n  box-shadow: none;\n  cursor: initial; }\n\n.pure-material-button-contained:disabled::before {\n  opacity: 0; }\n\n.pure-material-button-contained:disabled::after {\n  opacity: 0; }\n\n.pure-material-button-outlined {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  border: solid 1px;\n  border-color: rgba(0, 0, 0, 0.24);\n  border-radius: 4px;\n  padding: 0 16px;\n  min-width: 64px;\n  vertical-align: middle;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  color: #3E8E7E;\n  background-color: transparent;\n  font-family: var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 34px;\n  overflow: hidden;\n  outline: none;\n  cursor: pointer; }\n\n.pure-material-button-outlined::-moz-focus-inner {\n  border: none; }\n\n/* Overlay */\n.pure-material-button-outlined::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: currentColor;\n  opacity: 0;\n  transition: opacity 0.2s; }\n\n/* Ripple */\n.pure-material-button-outlined::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n  padding: 50%;\n  width: 32px;\n  height: 32px;\n  background-color: currentColor;\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(1);\n  transition: opacity 1s, transform 0.5s; }\n\n/* Hover, Focus */\n.pure-material-button-outlined:hover::before {\n  opacity: 0.04; }\n\n.pure-material-button-outlined:focus::before {\n  opacity: 0.12; }\n\n.pure-material-button-outlined:hover:focus::before {\n  opacity: 0.16; }\n\n/* Active */\n.pure-material-button-outlined:active::after {\n  opacity: 0.16;\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0s; }\n\n/* Disabled */\n.pure-material-button-outlined:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  background-color: transparent;\n  cursor: initial; }\n\n.pure-material-button-outlined:disabled::before {\n  opacity: 0; }\n\n.pure-material-button-outlined:disabled::after {\n  opacity: 0; }\n\n.pure-button-small {\n  font-size: 12px;\n  padding: 1px 15px; }\n\n.pure-button-medium {\n  font-size: 14px;\n  padding: 2px 20px; }\n\n.pure-button-large {\n  font-size: 16px;\n  padding: 4px 25px; }\n";
  var fileName = "index_button";
  var element = document.querySelector("style[data-sass-component='index_button']");

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
  color: '',
  variant: 'contained',
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
      variant = props.variant,
      restProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    className: (0, _clsx["default"])("pure-material-button-".concat(variant), color, "pure-button-".concat(size), className),
    style: _objectSpread({}, style),
    onClick: onClick,
    disabled: disabled
  }, restProps), children);
};

Button.defaultProps = defaultProps;
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9CdXR0b24vaW5kZXgudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsImNoaWxkcmVuIiwic2l6ZSIsImNvbG9yIiwidmFyaWFudCIsImRpc2FibGVkIiwic3R5bGUiLCJ1bmRlZmluZWQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwicHJvcHMiLCJyZXN0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTUEsWUFBd0IsR0FBRztBQUMvQkMsRUFBQUEsUUFBUSxFQUFFLEVBRHFCO0FBRS9CQyxFQUFBQSxJQUFJLEVBQUUsUUFGeUI7QUFHL0JDLEVBQUFBLEtBQUssRUFBRSxFQUh3QjtBQUkvQkMsRUFBQUEsT0FBTyxFQUFFLFdBSnNCO0FBSy9CQyxFQUFBQSxRQUFRLEVBQUUsS0FMcUI7QUFNL0JDLEVBQUFBLEtBQUssRUFBRUMsU0FOd0I7QUFPL0JDLEVBQUFBLE9BQU8sRUFBRUQsU0FQc0I7QUFRL0JFLEVBQUFBLFNBQVMsRUFBRTtBQVJvQixDQUFqQzs7QUFXQSxJQUFNQyxNQUE0QixHQUFHLFNBQS9CQSxNQUErQixDQUFDQyxLQUFELEVBQVc7QUFDOUMsTUFBUVYsUUFBUixHQUE4RlUsS0FBOUYsQ0FBUVYsUUFBUjtBQUFBLE1BQWtCRSxLQUFsQixHQUE4RlEsS0FBOUYsQ0FBa0JSLEtBQWxCO0FBQUEsTUFBeUJELElBQXpCLEdBQThGUyxLQUE5RixDQUF5QlQsSUFBekI7QUFBQSxNQUErQkcsUUFBL0IsR0FBOEZNLEtBQTlGLENBQStCTixRQUEvQjtBQUFBLE1BQXlDQyxLQUF6QyxHQUE4RkssS0FBOUYsQ0FBeUNMLEtBQXpDO0FBQUEsTUFBZ0RFLE9BQWhELEdBQThGRyxLQUE5RixDQUFnREgsT0FBaEQ7QUFBQSxNQUF5REMsU0FBekQsR0FBOEZFLEtBQTlGLENBQXlERixTQUF6RDtBQUFBLE1BQW9FTCxPQUFwRSxHQUE4Rk8sS0FBOUYsQ0FBb0VQLE9BQXBFO0FBQUEsTUFBZ0ZRLFNBQWhGLDRCQUE4RkQsS0FBOUY7O0FBQ0Esc0JBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRSxxREFBNkJQLE9BQTdCLEdBQXdDRCxLQUF4Qyx3QkFBOERELElBQTlELEdBQXNFTyxTQUF0RSxDQURiO0FBRUUsSUFBQSxLQUFLLG9CQUFNSCxLQUFOLENBRlA7QUFHRSxJQUFBLE9BQU8sRUFBRUUsT0FIWDtBQUlFLElBQUEsUUFBUSxFQUFFSDtBQUpaLEtBS01PLFNBTE4sR0FPR1gsUUFQSCxDQURGO0FBV0QsQ0FiRDs7QUFlQVMsTUFBTSxDQUFDVixZQUFQLEdBQXNCQSxZQUF0QjtlQUVlVSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCAnLi9idXR0b24uc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcclxuICBjaGlsZHJlbj86IGFueVxyXG4gIHNpemU/OiAnbWVkaXVtJyB8ICdsYXJnZScgfCAnc21hbGwnXHJcbiAgY29sb3I/OiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICcnXHJcbiAgdmFyaWFudD86ICdjb250YWluZWQnIHwgJ291dGxpbmVkJyB8ICd0ZXh0J1xyXG4gIGRpc2FibGVkPzogYm9vbGVhblxyXG4gIHN0eWxlPzogb2JqZWN0XHJcbiAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50PjtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzOkJ1dHRvblByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiAnJyxcclxuICBzaXplOiAnbWVkaXVtJyxcclxuICBjb2xvcjogJycsXHJcbiAgdmFyaWFudDogJ2NvbnRhaW5lZCcsXHJcbiAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gIHN0eWxlOiB1bmRlZmluZWQsXHJcbiAgb25DbGljazogdW5kZWZpbmVkLFxyXG4gIGNsYXNzTmFtZTogJycsXHJcbn07XHJcblxyXG5jb25zdCBCdXR0b246UmVhY3QuRkM8QnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgY29sb3IsIHNpemUsIGRpc2FibGVkLCBzdHlsZSwgb25DbGljaywgY2xhc3NOYW1lLCB2YXJpYW50LCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChgcHVyZS1tYXRlcmlhbC1idXR0b24tJHt2YXJpYW50fWAsIGNvbG9yLCBgcHVyZS1idXR0b24tJHtzaXplfWAsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHN0eWxlPXt7Li4uc3R5bGV9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgIHsuLi5yZXN0UHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufTtcclxuXHJcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il19