import React from "react";
import PropTypes from "prop-types";
export function PrimaryButton(param) {
    var children = param.children, className = param.className, disabled = param.disabled, tag = param.tag, onClick = param.onClick, size1 = param.size;
    var sizeClasses = function sizeClasses(size) {
        if (size === "lg") return "px-8 py-3 text-xl";
        return "px-4 py-2 text-lg";
    };
    className = [
        sizeClasses(size1),
        "text-black cursor-pointer",
        "bg-primary-500 text-black font-bold bg-gradient-to-br from-violet-500 to-fuchsia-500",
        "rounded-lg",
        "active:scale-95",
        "focus:outline-none focus:bg-focus-500 focus:from-transparent focus:to-transparent",
        "disabled:opacity-50 disabled:cursor-default disabled:active:scale-100",
        className, 
    ].join(" ");
    var Tag = tag;
    return /*#__PURE__*/ React.createElement(Tag, {
        className: className,
        onClick: onClick,
        disabled: disabled
    }, children);
}
PrimaryButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf([
        "lg"
    ]),
    tag: PropTypes.string
};
PrimaryButton.defaultProps = {
    className: "",
    disabled: false,
    onClick: function() {
        return null;
    },
    size: "base",
    tag: "button"
};
