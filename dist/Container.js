import React from "react";
export function Container(param) {
    var children = param.children, className = param.className, tag = param.tag;
    var Tag = tag;
    return /*#__PURE__*/ React.createElement(Tag, {
        className: "px-6 container mx-auto max-w-4xl ".concat(className)
    }, children);
}
Container.defaultProps = {
    className: "",
    tag: "div"
};
