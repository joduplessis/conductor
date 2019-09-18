# Conductor

> Conductor is a straightforward routing library for React. Still in development - check back soon for updates:

## Some example usage:
```
function DemoPage(props) {
  return (
    <div>Page ID {props.id} & current URL is {props.currentLocation}</div>
  )
}

<Routes>
  <Route path='/app' component={DemoPage} routeProps={{ id: 12 }}></CRoute>
</Routes>
```