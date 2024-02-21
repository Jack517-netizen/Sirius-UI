const io = require("socket.io-client")

const handleReaction = (emojiData) => {
  const emoji = emojiData['emoji']
  const url = emojiData['emojiUrl']
  const sender = 'JackJosue517'
  
  const payload = { 'sender': sender, 'url': url, emoji: emoji }
  const socket = io('https://sirius-backend.onrender.com')

  // check if connection is established
  socket.on("connect", () => {
    console.log(socket.id)
  });

  // send a message to the server
  socket.emit('reaction', JSON.stringify(payload))

  // receive a message from the server
  socket.on('reaction', (arg) => {
    const payload = JSON.parse(arg)
    console.log(payload)
    alert(payload['sender'] + ' --> ' + payload['emoji'])
  })
}

export default handleReaction
