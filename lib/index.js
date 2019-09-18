"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = require("./Route");
exports.Route = Route_1.Route;
const Routes_1 = require("./Routes");
exports.Routes = Routes_1.Routes;
const ThemeContext_1 = require("./ThemeContext");
exports.ThemeContext = ThemeContext_1.ThemeContext;
const keg_1 = require("@joduplessis/keg");
function navigate(location) {
    // Update our browser state
    history.pushState({}, "", location);
    // Notify our routes of the change
    // This will trigger context update to the other comopnents
    keg_1.default.keg('location').refill('update', location);
}
exports.navigate = navigate;
//# sourceMappingURL=index.js.map