<img src="https://joduplessis-keg.s3-us-west-2.amazonaws.com/barrel.svg" width="90" height="90">

# Conductor

> Conductor is a straightforward routing library for React using browser pushState, with type support too. Still under development, do not use in production.

## Installation:
```
npm i --save @joduplessis/conductor
```

## Some example usage:
```
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, navigate } from '@joduplessis/conductor'

function HomePage(props) {
  return (
    <div>
      <h1>Home page</h1>
      <p>{props.content}</p>
    </div>
  )
}

function AboutPage(props) {
  return (
    <div>
      <h1>About page</h1>
      <p>{props.content}</p>
    </div>
  )
}

function AboutPersonPage(props) {
  return (
    <div>
      <h1>About Person page</h1>
      <p>{props.content}</p>
      <small>Name: {props.name}</small>
    </div>
  )
}

function App(props) {
  return (
    <Routes>
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/about/jo')}>About Jo (URL parameter)</button>
      <hr />
      <Route path="/home" component={HomePage} routeProps={{ content: 'Home page text' }} />
      <Route path="/about" component={AboutPage} routeProps={{ content: 'About page text' }} />
      <Route path="/about/:name" component={AboutPersonPage} routeProps={{ content: 'About Person page text' }} />
    </Routes>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

```
