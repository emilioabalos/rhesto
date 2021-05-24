import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from '../Views/Home'
import About from '../Views/About'
import Recipe from '../Views/Recipe'

function Main() {
  return (
    <main className="layout-main">
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/recipes/:id">
          <Recipe />
        </Route>
      </Switch>
      <hr />
    </main>
  )
}

export default Main