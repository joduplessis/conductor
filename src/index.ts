import { Route } from "./Route";
import { Routes } from "./Routes";
import { ThemeContext } from "./ThemeContext";
import Keg from "@joduplessis/keg";

function navigate(location: string)  {
  // Update our browser state
  history.pushState({}, "", location)

  // Notify our routes of the change
  // This will trigger context update to the other comopnents
  Keg.keg('location').refill('update', location)
}

export {
  navigate,
  Route,
  Routes,
  ThemeContext,
};