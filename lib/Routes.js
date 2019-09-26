"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ThemeContext_1 = require("./ThemeContext");
const keg_1 = require("@joduplessis/keg");
exports.Routes = (props) => {
    const [currentLocation, setCurrentLocation] = React.useState('/');
    // Receive hashhistory update via Keg
    // Comes from the navigate function
    keg_1.default.keg('conductor').tap('location', (val, pour) => __awaiter(void 0, void 0, void 0, function* () {
        setCurrentLocation(val);
        pour();
    }));
    return (React.createElement(ThemeContext_1.ThemeContext.Provider, { value: { currentLocation } }, props.children));
};
//# sourceMappingURL=Routes.js.map