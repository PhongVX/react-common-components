"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextField = function TextField(props) {
  var id = props.id,
      name = props.name,
      type = props.type,
      label = props.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-field"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: id,
    type: type || 'text'
  }), !!label ? /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id
  }, label) : null);
};

var _default = TextField;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9UZXh0RmllbGQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRleHRGaWVsZCIsInByb3BzIiwiaWQiLCJuYW1lIiwidHlwZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFTQSxJQUFNQSxTQUFrQyxHQUFHLFNBQXJDQSxTQUFxQyxDQUFDQyxLQUFELEVBQVc7QUFDcEQsTUFBUUMsRUFBUixHQUFrQ0QsS0FBbEMsQ0FBUUMsRUFBUjtBQUFBLE1BQVlDLElBQVosR0FBa0NGLEtBQWxDLENBQVlFLElBQVo7QUFBQSxNQUFrQkMsSUFBbEIsR0FBa0NILEtBQWxDLENBQWtCRyxJQUFsQjtBQUFBLE1BQXdCQyxLQUF4QixHQUFrQ0osS0FBbEMsQ0FBd0JJLEtBQXhCO0FBQ0Esc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQU8sSUFBQSxFQUFFLEVBQUVILEVBQVg7QUFBZSxJQUFBLElBQUksRUFBRUUsSUFBSSxJQUFJO0FBQTdCLElBREYsRUFFRyxDQUFDLENBQUNDLEtBQUYsZ0JBQVU7QUFBTyxJQUFBLE9BQU8sRUFBRUg7QUFBaEIsS0FBcUJHLEtBQXJCLENBQVYsR0FBZ0QsSUFGbkQsQ0FERjtBQU1ELENBUkQ7O2VBVWVMLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0RmllbGRQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgaWQ/OnN0cmluZ1xyXG4gIHR5cGU/OiBzdHJpbmdcclxuICBsYWJlbD86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBUZXh0RmllbGQ6UmVhY3QuRkM8VGV4dEZpZWxkUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgbmFtZSwgdHlwZSwgbGFiZWwgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmllbGQnPlxyXG4gICAgICA8aW5wdXQgaWQ9e2lkfSB0eXBlPXt0eXBlIHx8ICd0ZXh0J30gLz5cclxuICAgICAgeyEhbGFiZWwgPyA8bGFiZWwgaHRtbEZvcj17aWR9PntsYWJlbH08L2xhYmVsPiA6IG51bGwgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkOyJdfQ==