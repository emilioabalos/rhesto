import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

class Drawer extends Component {

  render() {
    const { toggleClass, ariaToggle, hideAll } = this.props

    return (
      <div
        className={'layout-drawer layout-drawer-right' + toggleClass}
        aria-hidden={`${ariaToggle}`}
      >
        <div className="drawer">
          <div className="drawer-head"></div>
          <div className="drawer-body">
            <ul className="nav nav-tree nav-drawer-dashboard">
              <li className="nav-item">
                <Link to="/" onClick={hideAll}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" onClick={hideAll}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/recipes" onClick={hideAll}>Recipes</Link>
              </li>
            </ul>
          </div>
          <div className="drawer-foot"></div>
          <div className="drawer-close-float p-5 text-center" onClick={hideAll}>
            <div className="mt-n1"><FontAwesomeIcon icon={faTimes} /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Drawer
