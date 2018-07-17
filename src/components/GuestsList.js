import React from "react"
import PropTypes from "prop-types"
import Guest from "./Guest"
import PendingGuest from './PendingGuest'
const GuestsList = props =>
  <ul>
    <PendingGuest name={props.pendingGuest}/>
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest, i) =>
    <Guest key={i} name = {guest.name} isConfirmed={guest.isConfirmed} isEditing={guest.isEditing} handleConfirm = {()=> props.toggleConfirm(i)} handleEdit = {()=> props.toggleEdit(i)}
    setName = {text => props.setName(text, i)} handleRemove={() => props.removeGuest(i)}/>
    )}
  </ul>

  //pour valider la valeur du type (on veut être sûr que guests est un tableau)
  GuestsList.propTypes = {//quelles sont les proptypes de la guestslist
    guests : PropTypes.array.isRequired
  }



export default GuestsList
