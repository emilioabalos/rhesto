import React, { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Drawer from './Components/Drawer'
import Backdrop from './Components/Backdrop'
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  const [showMenu, setShowMenu] = useState(false)

  let menu = <Drawer toggleClass="" ariaToggle="true" />
  let backdrop = <Backdrop hideAll={() => setShowMenu(false)} toggleClass="" ariaToggle="true" />

  if (showMenu) {
    menu = <Drawer hideAll={() => setShowMenu(false)} toggleClass=" show" ariaToggle="false" />
    backdrop = <Backdrop hideAll={() => setShowMenu(false)} toggleClass=" show" ariaToggle="false" />
  }

  return (
    <React.Fragment>
      <Router>
        <div className="layout">
          <Header navigationToggle={() => setShowMenu(!showMenu)} />
          <Main />
          <Footer />
        </div>

        {menu}
        {backdrop}
      </Router>
    </React.Fragment>
  )
}

export default App
