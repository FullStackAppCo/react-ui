import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function FooterHeading(param) {
    var children = param.children, icon = param.icon;
    return /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center space-x-2"
    }, /*#__PURE__*/ React.createElement(FontAwesomeIcon, {
        icon: icon,
        className: "w-4 h-4 text-gray-400 dark:text-gray-500"
    }), /*#__PURE__*/ React.createElement("h2", {
        className: "text-gray-800 dark:text-gray-300 text-lg font-display tracking-wide"
    }, children));
}
