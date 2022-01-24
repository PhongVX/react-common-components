"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _UIUtil = require("../../../utils/UIUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function _() {
  var styles = "";
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

var Button = function Button(props) {
  var children = props.children,
      color = props.color,
      size = props.size,
      disabled = props.disabled,
      style = props.style,
      onClick = props.onClick,
      className = props.className;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: (0, _UIUtil.combineClasses)('btn', color || 'primary', 'waves-effect', 'waves-light', "btn-".concat(size), className || ''),
    style: _objectSpread({}, style),
    onClick: onClick,
    disabled: disabled
  }, children);
};

var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9CdXR0b24vaW5kZXgudHN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJjb2xvciIsInNpemUiLCJkaXNhYmxlZCIsInN0eWxlIiwib25DbGljayIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUF3QjtBQUNyQyxNQUFRQyxRQUFSLEdBQXVFRCxLQUF2RSxDQUFRQyxRQUFSO0FBQUEsTUFBa0JDLEtBQWxCLEdBQXVFRixLQUF2RSxDQUFrQkUsS0FBbEI7QUFBQSxNQUF5QkMsSUFBekIsR0FBdUVILEtBQXZFLENBQXlCRyxJQUF6QjtBQUFBLE1BQStCQyxRQUEvQixHQUF1RUosS0FBdkUsQ0FBK0JJLFFBQS9CO0FBQUEsTUFBeUNDLEtBQXpDLEdBQXVFTCxLQUF2RSxDQUF5Q0ssS0FBekM7QUFBQSxNQUFnREMsT0FBaEQsR0FBdUVOLEtBQXZFLENBQWdETSxPQUFoRDtBQUFBLE1BQXlEQyxTQUF6RCxHQUF1RVAsS0FBdkUsQ0FBeURPLFNBQXpEO0FBQ0Esc0JBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRSw0QkFBZSxLQUFmLEVBQXNCTCxLQUFLLElBQUksU0FBL0IsRUFBMEMsY0FBMUMsRUFBMEQsYUFBMUQsZ0JBQWdGQyxJQUFoRixHQUF3RkksU0FBUyxJQUFJLEVBQXJHLENBRGI7QUFFRSxJQUFBLEtBQUssb0JBQU1GLEtBQU4sQ0FGUDtBQUdFLElBQUEsT0FBTyxFQUFFQyxPQUhYO0FBSUUsSUFBQSxRQUFRLEVBQUVGO0FBSlosS0FNR0gsUUFOSCxDQURGO0FBVUQsQ0FaRDs7ZUFjZUYsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbWJpbmVDbGFzc2VzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvVUlVdGlsJztcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuXHJcbmludGVyZmFjZSBCdXR0b25Qcm9wcyB7XHJcbiAgY2hpbGRyZW4/OiBhbnlcclxuICBzaXplPzogJ21lZGl1bScgfCAnbGFyZ2UnIHwgJ3NtYWxsJ1xyXG4gIGNvbG9yPzogJ3ByaW1hcnknIHwgJ3NlY29uZGFyeSdcclxuICBkaXNhYmxlZD86IGJvb2xlYW5cclxuICBzdHlsZT86IG9iamVjdFxyXG4gIG9uQ2xpY2s/OiAoZTogYW55KSA9PiB2b2lkXHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wczogQnV0dG9uUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBjb2xvciwgc2l6ZSwgZGlzYWJsZWQsIHN0eWxlLCBvbkNsaWNrLCBjbGFzc05hbWUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y29tYmluZUNsYXNzZXMoJ2J0bicsIGNvbG9yIHx8ICdwcmltYXJ5JyAsJ3dhdmVzLWVmZmVjdCcsICd3YXZlcy1saWdodCcsIGBidG4tJHtzaXplfWAsIGNsYXNzTmFtZSB8fCAnJyl9XHJcbiAgICAgIHN0eWxlPXt7Li4uc3R5bGV9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiXX0=