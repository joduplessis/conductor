import * as React from "react";
import { ThemeContext } from "./ThemeContext";

function matchPathToUrl(path: string, url: string) {
  const sanitizedUrl: string = url[0] == '/' ? url.substring(1) : url;
  const sanitizedPath: string = path[0] == '/' ? path.substring(1) : path;
  const sanitizedUrlParts: string[] = sanitizedUrl.split('/');
  const sanitizedPathParts: string[] = sanitizedPath.split('/');
  const pathBoundaries: any[] = sanitizedPath.split('/').map(part => part[0] == ':' ? -1 : part);
  let values: any = {};

  const passes = pathBoundaries.reduce((pass: boolean, part: string, index: number) => {
    if (sanitizedUrlParts.length != sanitizedPathParts.length) return false;

    // If the part doesn't equal -1
    // then the 2 should be the same
    // otherwise return false
    if (part != -1) {
      if (sanitizedPathParts[index] != sanitizedUrlParts[index]) return false;
    } else {
      // If the part does equal -1
      // then it's a vairable
      // We need to check that it exists
      if (sanitizedUrlParts[index] == undefined || sanitizedUrlParts[index] == null) return false;

      // Save our parameter to give back to the user
      values[sanitizedPathParts[index]] = sanitizedUrlParts[index];
    }

    return pass ? true : false
  }, true);

  return { passes, values };
}

interface IRouteProps {
  children?: any;
  path: string;
  component: any;
  routeProps: any;
}

export const Route: React.FunctionComponent<IRouteProps> = (props: IRouteProps) => {
  const [currentUrl, setCurrentUrl] = React.useState('')
  const [render, setRender] = React.useState(false)

  return (
    <ThemeContext.Consumer>
      {(value: any) => {
        const path: string = props.path;
        const url = window.location.pathname;

        // If the URL doesn't change - don't recalcualte
        if (url == currentUrl && render) setRender(true)
        if (url == currentUrl && !render) setRender(false)

        // If the URL changes
        // Decide if we show the component
        if (url != currentUrl) {
          setRender(matchPathToUrl(path, url))
          setCurrentUrl(url)
        }

        // Only render it if it's the right route
        if (!render) return null

        // Pass down any additional props
        // And attach the currentLocation
        return (
          <props.component {...props.routeProps} currentLocation={value.currentLocation} />
        )
      }}
    </ThemeContext.Consumer>
  )
}
