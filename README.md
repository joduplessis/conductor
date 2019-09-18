# Conductor

> Conductor is a straightforward routing library for React. Still in development - check back soon for updates:

## Some example usage:
```
function AppPage(props) {
  return (
    <div>Main app page</div>
  )
}

function AboutPage(props) {
  return (
    <div>About page: ID {props.id} & current URL is {props.currentLocation}</div>
  )
}

<Routes>
  <Route path='/app' component={AppPage} />
  <Route path='/about' component={AboutPage} routeProps={{ id: 12 }} />
</Routes>
```