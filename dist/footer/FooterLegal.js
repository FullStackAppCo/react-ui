import React from "react";
import PropTypes from "prop-types";
export function FooterLegal(param) {
    var className = param.className;
    var smallClasses = "leading-loose";
    return /*#__PURE__*/ React.createElement("div", {
        className: "space-y-3 ".concat(className)
    }, /*#__PURE__*/ React.createElement("small", {
        className: "block ".concat(smallClasses)
    }, "Site designed and built by Full Stack App Co. \xa9 ", new Date().getFullYear(), " Full Stack App Company Ltd unless otherwise stated."), /*#__PURE__*/ React.createElement("small", {
        className: "block ".concat(smallClasses)
    }, "Full Stack App Company Ltd is a company registered in England and Wales. Registered office: Ground Floor, 13 Cable Court Pittman Way, Fulwood, Preston. PR2 9YW Company registration number: 09391612"));
}
FooterLegal.propTypes = {
    className: PropTypes.string
};
FooterLegal.defaultProps = {
    className: ""
};
