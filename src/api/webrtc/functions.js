// let localStream = null
let remoteStream = null
let roomId = null
let peerConnection = null

// const openUserMedia = async (e) => {
//   const stream = await navigator.mediaDevices.getUserMedia({
//     audio: true,
//     video: true,
//   })
//   document.querySelector('#localVideo').srcObject = stream
//   localStream = stream
// }

/** Disconnect and Quit the Meeting Room */
const hangUp = () => {
  //TODO: Implement disconnect the current user from the meeting...
  // Close the peer connection
  if (peerConnection) {
    peerConnection.close()
  }

  // Stop the remote stream
  if (remoteStream) {
    remoteStream.getTracks().forEach((track) => track.stop())
  }

  document.querySelector('#remoteVideo').srcObject = null

  // Delete room on hangup
  if (roomId) {
    // const db = fireba .firestore()
    // const roomRef = db.collections('rooms').doc('')
  }

  document.location = '/'
}

/** Perform an action according to the source */
const actionHandler = (e) => {
  let source = e.target.id
  switch (source) {
    case 'hangUp':
      hangUp()
      break
    default:
      alert('Cette action ne peut-être réalisée !!!')
      break
  }
}

/** Init interface with an event layer based on click for controls icon */
const initialize = () => {
  const controlBtns = document.querySelectorAll('.control')
  Array.from(controlBtns).forEach((element, index) => {
    element.addEventListener('click', (e) => actionHandler(e))
  })
}

export default initialize
