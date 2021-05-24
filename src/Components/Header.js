import React, { Component } from 'react'
import Navigation from './Navigation'

class Header extends Component {
  render() {
    return (
      <header className="layout-header">
        <div className="container">
          <div className="head py-4">
            <span>Rhesto</span>
            <Navigation navigationClick={this.props.navigationToggle} />
          </div>
        </div>
      </header>
    )
  }
}

export default Header