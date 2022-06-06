import React from "react";
import PropTypes from "prop-types";
export function ExternalLink(param) {
    var className = param.className, children = param.children, href = param.href;
    className = [
        "p-0.5",
        "font-medium text-primary-500 dark:text-primary-300 underline",
        "focus:outline-none focus:bg-focus-500 focus:text-black focus:no-underline",
        className, 
    ].join(" ");
    return /*#__PURE__*/ React.createElement("a", {
        href: href,
        className: className
    }, children);
}
ExternalLink.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired
};
ExternalLink.defaultProps = {
    className: ""
};
