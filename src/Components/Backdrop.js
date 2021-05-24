import React, { Component } from 'react'

class Backdrop extends Component {
  render() {
    const { hideAll, ariaToggle, toggleClass } = this.props

    return (
      <React.Fragment>
        <div
          onClick={hideAll}
          className={'layout-backdrop' + toggleClass}
          aria-hidden={`${ariaToggle}`}
        >
        </div>
      </React.Fragment>
    )
  }
}

export default Backdrop