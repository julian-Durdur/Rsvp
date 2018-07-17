import React, { Component } from 'react';
import './App.css';
import GuestsList from "./components/GuestsList"
import Counter from './components/Counter'

class App extends Component {
  state = {//créer une state
    isFiltered : false,
    pendingGuest: "",
    guests:[
    ]
  };
  toggleGuestProperties = (property, indexToChange) =>
  this.setState({
    guests:this.state.guests.map((guest, i) => {
      if(i===indexToChange) {
        return {...guest, [property]: !guest[property]}
      }
      return guest
    })
  })
  toggleConfirm = index =>
  this.toggleGuestProperties("isConfirmed", index)

  removeGuest = index =>
  this.setState({
    guests:[
      ...this.state.guests.slice(0, index),
      ...this.state.guests.slice(index+1)
    ]
  })

  toggleEdit = index =>
  this.toggleGuestProperties("isEditing", index)

  setName = (name, indexToChange)=>
  this.setState({
    guests: this.state.guests.map((guest, i) => {
      if(i === indexToChange) {
        return {
          ...guest,
          name
        }
      }
      return guest
    })
  })

toggleFilter = () => this.setState({
  isFiltered: !this.state.isFiltered
})

handleNameInput = (e) =>
  this.setState({
    pendingGuest: e.target.value
  })

newGuestSubmit = (e) => {
  e.preventDefault();
  this.setState({
    guests : [{
      name: this.state.pendingGuest,
      isConfirmed: false,
      isEditing: false
    },
    ...this.state.guests
  ],
  pendingGuest: ""
  })
}

  getTotalInvited = () => this.state.guests.length
  getAttendingGuests = () =>
  this.state.guests.reduce(
    (total, guest) => guest.isConfirmed ? total+1 : total,0
  )
  //getUnconfirmedGuests = () =>

  render() {
    const totalInvited = this.getTotalInvited()
    const numberAttending = this.getAttendingGuests()
    const numberUnconfirmed = totalInvited-numberAttending
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Simplon App</p>
          <form onSubmit={this.newGuestSubmit}>
            <input type="text" onChange={this.handleNameInput} value={this.state.pendingGuest} placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" onChange={this.toggleFilter} checked={this.state.isFiltered} /> Hide those who havent responded
            </label>
          </div>

          <Counter totalInvited={totalInvited} numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}/>

          <GuestsList guests = {this.state.guests} toggleConfirm = {this.toggleConfirm} toggleEdit = {this.toggleEdit}
            setName = {this.setName} isFiltered = {this.state.isFiltered} removeGuest={this.removeGuest} pendingGuest={this.state.pendingGuest}/>

        </div>
      </div>
    );
  }
}

export default App;
