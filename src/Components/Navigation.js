import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

class Navigation extends Component {
  render() {
    return (
      <nav>
        <FontAwesomeIcon icon={faBars} onClick={this.props.navigationClick} />
      </nav>
    )
  }
}

export default Navigation
