import React from 'react'
import firebase from 'firebase'

function HomeScreen() {
  return (
    <div>
      <button onClick={() =>firebase.auth().signOut()}>Signoput</button>
    </div>
  )
}

export default HomeScreen