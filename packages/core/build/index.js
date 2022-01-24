"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

require("materialize-css/dist/css/materialize.min.css");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function _() {
  var styles = ".primary {\n  background-color: #3E8E7E !important; }\n\n.primary-text {\n  color: #3E8E7E !important; }\n\n.primary.lighten-5 {\n  background-color: #edf7f5 !important; }\n\n.primary-text.text-lighten-5 {\n  color: #edf7f5 !important; }\n\n.primary.lighten-4 {\n  background-color: #cce8e3 !important; }\n\n.primary-text.text-lighten-4 {\n  color: #cce8e3 !important; }\n\n.primary.lighten-3 {\n  background-color: #b0dcd3 !important; }\n\n.primary-text.text-lighten-3 {\n  color: #b0dcd3 !important; }\n\n.primary.lighten-2 {\n  background-color: #96d1c5 !important; }\n\n.primary-text.text-lighten-2 {\n  color: #96d1c5 !important; }\n\n.primary.lighten-1 {\n  background-color: #6ec0af !important; }\n\n.primary-text.text-lighten-1 {\n  color: #6ec0af !important; }\n\n.primary.darken-1 {\n  background-color: #77c3b4 !important; }\n\n.primary-text.text-darken-1 {\n  color: #77c3b4 !important; }\n\n.primary.darken-2 {\n  background-color: #5eb8a6 !important; }\n\n.primary-text.text-darken-2 {\n  color: #5eb8a6 !important; }\n\n.primary.darken-3 {\n  background-color: #4eb19e !important; }\n\n.primary-text.text-darken-3 {\n  color: #4eb19e !important; }\n\n.primary.darken-4 {\n  background-color: #429987 !important; }\n\n.primary-text.text-darken-4 {\n  color: #429987 !important; }\n\n.secondary {\n  background-color: #FABB51 !important; }\n\n.secondary-text {\n  color: #FABB51 !important; }\n\n.secondary.lighten-5 {\n  background-color: #fef8ee !important; }\n\n.secondary-text.text-lighten-5 {\n  color: #fef8ee !important; }\n\n.secondary.lighten-4 {\n  background-color: #fef3e1 !important; }\n\n.secondary-text.text-lighten-4 {\n  color: #fef3e1 !important; }\n\n.secondary.lighten-3 {\n  background-color: #fdeed5 !important; }\n\n.secondary-text.text-lighten-3 {\n  color: #fdeed5 !important; }\n\n.secondary.lighten-2 {\n  background-color: #fde8c6 !important; }\n\n.secondary-text.text-lighten-2 {\n  color: #fde8c6 !important; }\n\n.secondary.lighten-1 {\n  background-color: #fce2b7 !important; }\n\n.secondary-text.text-lighten-1 {\n  color: #fce2b7 !important; }\n\n.secondary.darken-1 {\n  background-color: #fcd696 !important; }\n\n.secondary-text.text-darken-1 {\n  color: #fcd696 !important; }\n\n.secondary.darken-2 {\n  background-color: #fbce82 !important; }\n\n.secondary-text.text-darken-2 {\n  color: #fbce82 !important; }\n\n.secondary.darken-3 {\n  background-color: #fac873 !important; }\n\n.secondary-text.text-darken-3 {\n  color: #fac873 !important; }\n\n.secondary.darken-4 {\n  background-color: #fabf5d !important; }\n\n.secondary-text.text-darken-4 {\n  color: #fabf5d !important; }\n\n.black {\n  background-color: #000000 !important; }\n\n.black-text {\n  color: #000000 !important; }\n\n.white {\n  background-color: #FFFFFF !important; }\n\n.white-text {\n  color: #FFFFFF !important; }\n\n.transparent {\n  background-color: transparent !important; }\n\n.transparent-text {\n  color: transparent !important; }\n";
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

var Button = _Button["default"];
exports.Button = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9pbmRleC50cyJdLCJuYW1lcyI6WyJCdXR0b24iLCJCdXR0b25Db21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLE1BQU0sR0FBR0Msa0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ21hdGVyaWFsaXplLWNzcy9kaXN0L2Nzcy9tYXRlcmlhbGl6ZS5taW4uY3NzJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tICcuL0J1dHRvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gQnV0dG9uQ29tcG9uZW50O1xyXG4iXX0=