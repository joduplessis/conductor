"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ThemeContext_1 = require("./ThemeContext");
exports.Route = (props) => {
    return (React.createElement(ThemeContext_1.ThemeContext.Consumer, null, (value) => {
        // TODO: Match value.currentLocation against props.path 
        // Pass down any additional props
        // And attach the currentLocation
        return (React.createElement(props.component, Object.assign({}, props.routeProps, { currentLocation: value.currentLocation })));
    }));
};
//# sourceMappingURL=Route.js.map