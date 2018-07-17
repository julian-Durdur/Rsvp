import React from "react"
import PropTypes from "prop-types"

const GuestName = props => {
  if(props.isEditing) {
    return (
      <input
        type = "text"
        value= {props.children}
        onChange = {props.handleEditName}
      />
    )
  }
  return (
    <span>{props.children}</span>
  )
}

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired
}

export default GuestName
