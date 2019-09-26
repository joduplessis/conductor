"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ThemeContext_1 = require("./ThemeContext");
function matchPathToUrl(path, url) {
    const sanitizedUrl = url[0] == "/" ? url.substring(1) : url;
    const sanitizedPath = path[0] == "/" ? path.substring(1) : path;
    const sanitizedUrlParts = sanitizedUrl.split("/");
    const sanitizedPathParts = sanitizedPath.split("/");
    const pathBoundaries = sanitizedPath.split("/").map(part => part[0] == ":" ? "" : part);
    let values = {};
    const passes = pathBoundaries.reduce((pass, part, index) => {
        if (sanitizedUrlParts.length != sanitizedPathParts.length)
            return false;
        // If the part doesn"t equal -1
        // then the 2 should be the same
        // otherwise return false
        if (part != "") {
            if (sanitizedPathParts[index] != sanitizedUrlParts[index])
                return false;
        }
        else {
            // If the part does equal -1
            // then it"s a vairable
            // We need to check that it exists
            if (sanitizedUrlParts[index] == undefined || sanitizedUrlParts[index] == null || sanitizedUrlParts[index] == "")
                return false;
            // Save our parameter to give back to the user
            values[sanitizedPathParts[index].substring(1)] = sanitizedUrlParts[index];
        }
        return pass ? true : false;
    }, true);
    return { passes, values };
}
exports.Route = (props) => {
    const defaultRender = {
        passes: false,
        values: {},
    };
    const [currentUrl, setCurrentUrl] = React.useState("");
    const [render, setRender] = React.useState(defaultRender);
    return (React.createElement(ThemeContext_1.ThemeContext.Consumer, null, (value) => {
        const path = props.path;
        const url = window.location.pathname;
        // If the URL doesn"t change - don"t recalcualte
        // If the URL changes:
        // Decide if we show the component
        if (url != currentUrl) {
            setRender(matchPathToUrl(path, url));
            setCurrentUrl(url);
        }
        // Only render it if it"s the right route
        if (!render.passes)
            return null;
        // Pass down any additional props
        // And attach the currentLocation
        return (React.createElement(props.component, Object.assign({}, props.routeProps, render.values, { currentLocation: value.currentLocation })));
    }));
};
//# sourceMappingURL=Route.js.map