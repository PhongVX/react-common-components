"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function _() {
  var styles = ".pure-material-textfield-standard {\n  position: relative;\n  display: inline-block;\n  font-family: var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);\n  font-size: 16px;\n  line-height: 1.5;\n  overflow: hidden; }\n\n/* Input, Textarea */\n.pure-material-textfield-standard > input,\n.pure-material-textfield-standard > textarea {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  border: none;\n  border-top: solid 27px transparent;\n  border-bottom: solid 1px rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);\n  padding: 0 0 4px;\n  width: 100%;\n  height: inherit;\n  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);\n  background-color: transparent;\n  box-shadow: none;\n  /* Firefox */\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  caret-color: #3E8E7E;\n  transition: border-bottom 0.2s, background-color 0.2s; }\n\n/* Span */\n.pure-material-textfield-standard > input + span,\n.pure-material-textfield-standard > textarea + span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: block;\n  box-sizing: border-box;\n  padding: 7px 0 0;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 75%;\n  line-height: 18px;\n  pointer-events: none;\n  transition: color 0.2s, font-size 0.2s, line-height 0.2s; }\n\n/* Underline */\n.pure-material-textfield-standard > input + span::after,\n.pure-material-textfield-standard > textarea + span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #3E8E7E;\n  transform-origin: bottom center;\n  transform: scaleX(0);\n  transition: transform 0.2s; }\n\n/* Hover */\n.pure-material-textfield-standard > input:hover,\n.pure-material-textfield-standard > textarea:hover {\n  border-bottom-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87); }\n\n/* Placeholder-shown */\n.pure-material-textfield-standard > input:not(:focus):placeholder-shown + span,\n.pure-material-textfield-standard > textarea:not(:focus):placeholder-shown + span {\n  font-size: inherit;\n  line-height: 56px; }\n\n/* Focus */\n.pure-material-textfield-standard > input:focus,\n.pure-material-textfield-standard > textarea:focus {\n  outline: none; }\n\n.pure-material-textfield-standard > input:focus + span,\n.pure-material-textfield-standard > textarea:focus + span {\n  color: #3E8E7E; }\n\n.pure-material-textfield-standard > input:focus + span::before,\n.pure-material-textfield-standard > textarea:focus + span::before {\n  opacity: 0.12; }\n\n.pure-material-textfield-standard > input:focus + span::after,\n.pure-material-textfield-standard > textarea:focus + span::after {\n  transform: scale(1); }\n\n/* Disabled */\n.pure-material-textfield-standard > input:disabled,\n.pure-material-textfield-standard > textarea:disabled {\n  border-bottom-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);\n  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38); }\n\n.pure-material-textfield-standard > input:disabled + span,\n.pure-material-textfield-standard > textarea:disabled + span {\n  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38); }\n\n/* Faster transition in Safari for less noticable fractional font-size issue */\n@media not all and (min-resolution: 0.001dpcm) {\n  @supports (-webkit-appearance: none) {\n    .pure-material-textfield-standard > input,\n    .pure-material-textfield-standard > input + span,\n    .pure-material-textfield-standard > input + span::after,\n    .pure-material-textfield-standard > textarea,\n    .pure-material-textfield-standard > textarea + span,\n    .pure-material-textfield-standard > textarea + span::after {\n      transition-duration: 0.1s; } } }\n";
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
      name = props.name,
      type = props.type,
      label = props.label;
  return /*#__PURE__*/_react["default"].createElement("label", {
    className: "pure-material-textfield-standard"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: " ",
    id: id,
    type: type || 'text'
  }), !!label ? /*#__PURE__*/_react["default"].createElement("span", null, "Textfield") : null);
};

var _default = TextField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9UZXh0RmllbGQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRleHRGaWVsZCIsInByb3BzIiwiaWQiLCJuYW1lIiwidHlwZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxJQUFNQSxTQUFrQyxHQUFHLFNBQXJDQSxTQUFxQyxDQUFDQyxLQUFELEVBQVc7QUFDcEQsTUFBUUMsRUFBUixHQUFrQ0QsS0FBbEMsQ0FBUUMsRUFBUjtBQUFBLE1BQVlDLElBQVosR0FBa0NGLEtBQWxDLENBQVlFLElBQVo7QUFBQSxNQUFrQkMsSUFBbEIsR0FBa0NILEtBQWxDLENBQWtCRyxJQUFsQjtBQUFBLE1BQXdCQyxLQUF4QixHQUFrQ0osS0FBbEMsQ0FBd0JJLEtBQXhCO0FBQ0Esc0JBQ0U7QUFBTyxJQUFBLFNBQVMsRUFBQztBQUFqQixrQkFDRTtBQUFPLElBQUEsV0FBVyxFQUFDLEdBQW5CO0FBQXVCLElBQUEsRUFBRSxFQUFFSCxFQUEzQjtBQUErQixJQUFBLElBQUksRUFBRUUsSUFBSSxJQUFJO0FBQTdDLElBREYsRUFFRyxDQUFDLENBQUNDLEtBQUYsZ0JBQVMsMERBQVQsR0FBa0MsSUFGckMsQ0FERjtBQU1ELENBUkQ7O2VBVWVMLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vdGV4dEZpZWxkLnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0RmllbGRQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgaWQ/OnN0cmluZ1xyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBsYWJlbD86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBUZXh0RmllbGQ6UmVhY3QuRkM8VGV4dEZpZWxkUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgbmFtZSwgdHlwZSwgbGFiZWwgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGFiZWwgY2xhc3NOYW1lPSdwdXJlLW1hdGVyaWFsLXRleHRmaWVsZC1zdGFuZGFyZCc+XHJcbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiBcIiBpZD17aWR9IHR5cGU9e3R5cGUgfHwgJ3RleHQnfSAvPlxyXG4gICAgICB7ISFsYWJlbCA/PHNwYW4+VGV4dGZpZWxkPC9zcGFuPiA6IG51bGwgfVxyXG4gICAgPC9sYWJlbD5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0RmllbGQ7Il19