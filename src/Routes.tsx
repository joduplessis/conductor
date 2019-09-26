import * as React from "react";
import { ThemeContext } from "./ThemeContext";
import Keg from "@joduplessis/keg";

interface IRoutesProps {
  children?: any;
}

export const Routes: React.FunctionComponent<IRoutesProps> = (props: IRoutesProps) => {
  const [currentLocation, setCurrentLocation] = React.useState('/');

  // Receive hashhistory update via Keg
  // Comes from the navigate function
  Keg.keg('conductor').tap('location', async (val: any, pour: any) => {
    setCurrentLocation(val);
    pour();
  });

  return (
    <ThemeContext.Provider value={{ currentLocation }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
