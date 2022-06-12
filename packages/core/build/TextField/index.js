"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _excluded = ["id", "type", "label", "style", "fullWidth", "error", "helperText"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function _() {
  var styles = ".pure-material-textfield-standard {\n  position: relative;\n  display: inline-block;\n  font-family: var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);\n  font-size: 16px;\n  line-height: 1.5;\n  overflow: hidden; }\n\n/* Input, Textarea */\n.pure-material-textfield-standard > input,\n.pure-material-textfield-standard > textarea {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  border: none;\n  border-top: solid 27px transparent;\n  border-bottom: solid 1px rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);\n  padding: 0 0 4px;\n  width: 100%;\n  height: inherit;\n  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);\n  background-color: transparent;\n  box-shadow: none;\n  /* Firefox */\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  caret-color: #3E8E7E;\n  transition: border-bottom 0.2s, background-color 0.2s; }\n\n/* Span */\n.pure-material-textfield-standard > input + span,\n.pure-material-textfield-standard > textarea + span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: block;\n  box-sizing: border-box;\n  padding: 7px 0 0;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 75%;\n  line-height: 18px;\n  pointer-events: none;\n  transition: color 0.2s, font-size 0.2s, line-height 0.2s; }\n\n/* Underline */\n.pure-material-textfield-standard > input + span::after,\n.pure-material-textfield-standard > textarea + span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #3E8E7E;\n  transform-origin: bottom center;\n  transform: scaleX(0);\n  transition: transform 0.2s; }\n\n/* Hover */\n.pure-material-textfield-standard > input:hover,\n.pure-material-textfield-standard > textarea:hover {\n  border-bottom-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87); }\n\n/* Placeholder-shown */\n.pure-material-textfield-standard > input:not(:focus):placeholder-shown + span,\n.pure-material-textfield-standard > textarea:not(:focus):placeholder-shown + span {\n  font-size: inherit;\n  line-height: 56px; }\n\n/* Focus */\n.pure-material-textfield-standard > input:focus,\n.pure-material-textfield-standard > textarea:focus {\n  outline: none; }\n\n.pure-material-textfield-standard > input:focus + span,\n.pure-material-textfield-standard > textarea:focus + span {\n  color: #3E8E7E; }\n\n.pure-material-textfield-standard > input:focus + span::before,\n.pure-material-textfield-standard > textarea:focus + span::before {\n  opacity: 0.12; }\n\n.pure-material-textfield-standard > input:focus + span::after,\n.pure-material-textfield-standard > textarea:focus + span::after {\n  transform: scale(1); }\n\n/* Disabled */\n.pure-material-textfield-standard > input:disabled,\n.pure-material-textfield-standard > textarea:disabled {\n  border-bottom-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);\n  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38); }\n\n.pure-material-textfield-standard > input:disabled + span,\n.pure-material-textfield-standard > textarea:disabled + span {\n  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38); }\n\n/* Faster transition in Safari for less noticable fractional font-size issue */\n@media not all and (min-resolution: 0.001dpcm) {\n  @supports (-webkit-appearance: none) {\n    .pure-material-textfield-standard > input,\n    .pure-material-textfield-standard > input + span,\n    .pure-material-textfield-standard > input + span::after,\n    .pure-material-textfield-standard > textarea,\n    .pure-material-textfield-standard > textarea + span,\n    .pure-material-textfield-standard > textarea + span::after {\n      transition-duration: 0.1s; } } }\n\n.pure-textfield-helpertext {\n  font-size: small;\n  font-family: var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system); }\n\n.pure-textfield-helpertext-error {\n  color: red; }\n\n.pure-textfield-error > input + span,\n.pure-textfield-error > textarea + span {\n  color: red; }\n\n.pure-textfield-error > input:focus + span,\n.pure-textfield-error > textarea:focus + span {\n  color: red; }\n\n.pure-textfield-error > input,\n.pure-textfield-error > textarea {\n  border-bottom-color: red;\n  caret-color: red; }\n\n.pure-textfield-error > input:hover,\n.pure-textfield-error > textarea:hover {\n  border-bottom-color: red; }\n\n.pure-textfield-error > input + span::after,\n.pure-textfield-error > textarea + span::after {\n  background-color: red; }\n";
  var fileName = "index_textField";
  var element = document.querySelector("style[data-sass-component='index_textField']");

  if (!element) {
    var styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

var TextField = function TextField(props) {
  var id = props.id,
      type = props.type,
      label = props.label,
      style = props.style,
      fullWidth = props.fullWidth,
      error = props.error,
      helperText = props.helperText,
      restProps = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", {
    style: _objectSpread({
      width: fullWidth ? '100%' : ''
    }, style),
    className: (0, _clsx["default"])('pure-material-textfield-standard', error ? 'pure-textfield-error' : '')
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({}, restProps, {
    placeholder: " ",
    id: id,
    type: type || 'text'
  })), !!label ? /*#__PURE__*/_react["default"].createElement("span", null, label) : null), /*#__PURE__*/_react["default"].createElement("br", null), !!helperText ? /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _clsx["default"])('pure-textfield-helpertext', error ? 'pure-textfield-helpertext-error' : '')
  }, helperText) : null);
};

var _default = TextField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9UZXh0RmllbGQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRleHRGaWVsZCIsInByb3BzIiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJzdHlsZSIsImZ1bGxXaWR0aCIsImVycm9yIiwiaGVscGVyVGV4dCIsInJlc3RQcm9wcyIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLElBQU1BLFNBQWtDLEdBQUcsU0FBckNBLFNBQXFDLENBQUNDLEtBQUQsRUFBVztBQUNwRCxNQUFRQyxFQUFSLEdBQStFRCxLQUEvRSxDQUFRQyxFQUFSO0FBQUEsTUFBWUMsSUFBWixHQUErRUYsS0FBL0UsQ0FBWUUsSUFBWjtBQUFBLE1BQWtCQyxLQUFsQixHQUErRUgsS0FBL0UsQ0FBa0JHLEtBQWxCO0FBQUEsTUFBeUJDLEtBQXpCLEdBQStFSixLQUEvRSxDQUF5QkksS0FBekI7QUFBQSxNQUFnQ0MsU0FBaEMsR0FBK0VMLEtBQS9FLENBQWdDSyxTQUFoQztBQUFBLE1BQTJDQyxLQUEzQyxHQUErRU4sS0FBL0UsQ0FBMkNNLEtBQTNDO0FBQUEsTUFBa0RDLFVBQWxELEdBQStFUCxLQUEvRSxDQUFrRE8sVUFBbEQ7QUFBQSxNQUFpRUMsU0FBakUsNEJBQStFUixLQUEvRTs7QUFDQSxzQkFDRSwrRUFDRTtBQUFPLElBQUEsS0FBSztBQUFHUyxNQUFBQSxLQUFLLEVBQUNKLFNBQVMsR0FBQyxNQUFELEdBQVE7QUFBMUIsT0FBZ0NELEtBQWhDLENBQVo7QUFBb0QsSUFBQSxTQUFTLEVBQUUsc0JBQUssa0NBQUwsRUFBeUNFLEtBQUssR0FBQyxzQkFBRCxHQUF3QixFQUF0RTtBQUEvRCxrQkFDRSxzREFBV0UsU0FBWDtBQUFzQixJQUFBLFdBQVcsRUFBQyxHQUFsQztBQUFzQyxJQUFBLEVBQUUsRUFBRVAsRUFBMUM7QUFBOEMsSUFBQSxJQUFJLEVBQUVDLElBQUksSUFBSTtBQUE1RCxLQURGLEVBRUcsQ0FBQyxDQUFDQyxLQUFGLGdCQUFTLDhDQUFPQSxLQUFQLENBQVQsR0FBZ0MsSUFGbkMsQ0FERixlQUlVLDJDQUpWLEVBS0csQ0FBQyxDQUFDSSxVQUFGLGdCQUFhO0FBQU8sSUFBQSxTQUFTLEVBQUUsc0JBQUssMkJBQUwsRUFBa0NELEtBQUssR0FBQyxpQ0FBRCxHQUFtQyxFQUExRTtBQUFsQixLQUFrR0MsVUFBbEcsQ0FBYixHQUFtSSxJQUx0SSxDQURGO0FBU0QsQ0FYRDs7ZUFhZVIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5cclxuaW1wb3J0ICcuL3RleHRGaWVsZC5zY3NzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dEZpZWxkUHJvcHMge1xyXG4gIGxhYmVsPzpzdHJpbmdcclxuICBpZD86c3RyaW5nXHJcbiAgdHlwZT86IHN0cmluZ1xyXG4gIHN0eWxlPzogb2JqZWN0XHJcbiAgZnVsbFdpZHRoPzogYm9vbGVhblxyXG4gIGVycm9yPzogYm9vbGVhblxyXG4gIGhlbHBlclRleHQ/OiBzdHJpbmdcclxuICBkaXNhYmxlZD86Ym9vbGVhblxyXG59XHJcblxyXG5jb25zdCBUZXh0RmllbGQ6UmVhY3QuRkM8VGV4dEZpZWxkUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgdHlwZSwgbGFiZWwsIHN0eWxlLCBmdWxsV2lkdGgsIGVycm9yLCBoZWxwZXJUZXh0LCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bGFiZWwgc3R5bGU9e3t3aWR0aDpmdWxsV2lkdGg/JzEwMCUnOicnLC4uLnN0eWxlfX0gY2xhc3NOYW1lPXtjbHN4KCdwdXJlLW1hdGVyaWFsLXRleHRmaWVsZC1zdGFuZGFyZCcsIGVycm9yPydwdXJlLXRleHRmaWVsZC1lcnJvcic6JycpfT5cclxuICAgICAgICA8aW5wdXQgey4uLnJlc3RQcm9wc30gcGxhY2Vob2xkZXI9XCIgXCIgaWQ9e2lkfSB0eXBlPXt0eXBlIHx8ICd0ZXh0J30gLz5cclxuICAgICAgICB7ISFsYWJlbCA/PHNwYW4+e2xhYmVsfTwvc3Bhbj4gOiBudWxsIH1cclxuICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICB7ISFoZWxwZXJUZXh0PzxsYWJlbCBjbGFzc05hbWU9e2Nsc3goJ3B1cmUtdGV4dGZpZWxkLWhlbHBlcnRleHQnLCBlcnJvcj8ncHVyZS10ZXh0ZmllbGQtaGVscGVydGV4dC1lcnJvcic6JycpfT57aGVscGVyVGV4dH08L2xhYmVsPjpudWxsfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkOyJdfQ==