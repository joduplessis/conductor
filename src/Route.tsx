import * as React from "react";
import { ThemeContext } from "./ThemeContext";

interface IRouteProps {
  children?: any;
  path: string;
  component: any;
  routeProps: any;
}

export const Route: React.FunctionComponent<IRouteProps> = (props: IRouteProps) => {
  return (
    <ThemeContext.Consumer>
      {(value: any) => {
        // TODO: Match value.currentLocation against props.path 
        // Pass down any additional props
        // And attach the currentLocation
        return (
          <props.component {...props.routeProps} currentLocation={value.currentLocation} />
        )
      }}
    </ThemeContext.Consumer>
  )
}
