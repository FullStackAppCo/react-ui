import React from "react";
export function TextClip(param) {
    var children = param.children, className = param.className;
    return /*#__PURE__*/ React.createElement("span", {
        className: "bg-clip-text text-transparent ".concat(className)
    }, children);
}
TextClip.defaultProps = {
    className: ""
};
