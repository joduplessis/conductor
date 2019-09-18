# Conductor

> Conductor is a straightforward routing library for React. Still in development - check back soon for updates:

## Some example usage:
```
import React from 'react'
import { Routes, Route, navigate } from '@joduplessis/conductor'

function AppPage(props) {
  return (
    <React.Fragment>
      <div>Main app page</div>
      <button onClick={() => navigate('/about')}>Go to about page</button>
    </React.Fragment>
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