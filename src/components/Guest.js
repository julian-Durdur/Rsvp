import React from "react"
import PropTypes from "prop-types"
import GuestName from "./GuestName"

const Guest = props =>
  <li>
    <GuestName isEditing = {props.isEditing} handleEditName = {e => props.setName(e.target.value)} >{props.name}</GuestName>
    <label>
      <input type="checkbox" checked={props.isConfirmed} onChange = {props.handleConfirm}/> isConfirmed

      </label>
      <button onClick={props.handleEdit}>{props.isEditing?"Save":"Edit"}</button>
      <button onClick={props.handleRemove}>Remove</button>
  </li>

  Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired
  }


export default Guest
