import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Header from '../../components/Header'
import styled from 'styled-components'
import request from './../../assets/social.svg'
import colors from '../../utils/style/colors'

const WaitingRoom = styled.div`
  width: calc(100% - 140px);
  height: 70vh;
  overflow: hidden;
  display: flex;
  margin: auto;
  .col-1 {
    flex-basis: 55%;
    padding: 25px;
  }
  .col-1 video {
    width: 100%%;
    height: 400px;
    border-radius: 25px;
    margin: 10px;
    border: 1px solid ${colors.lightGray};
  }
  .col-1 div {
    background: #555;
    width: 100%%;
    height: 400px;
    border-radius: 25px;
    margin: 10px;
    border: 1px solid ${colors.lightGray};
  }
  .col-2 {
    flex-basis: 35%;
    height: 30%;
    align-self: center;
  }
  .col-2 h2 {
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
  }
  .col-2 h3 {
    text-align: center;
    font-size: 0.8em;
  }
  .controls {
    width: 15%;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-around;
  }
`

const VideoControl = styled.i`
  position: relative;
  bottom: 100px;
  cursor: pointer;
  padding: 20px;
  background: ${colors.primaryColor};
  color: #fff;
  border-radius: 50%;
  margin-left: 25px;
`

const JoinControl = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  button {
    border: 1px solid ${colors.primaryColor};
    outline: none;
    font-family: 'Fira Sans';
    font-size: 1.3em;
    background: ${colors.primaryColor};
    border-radius: 25px;
    padding: 10px;
    color: #fff;
    font-weight: 6000;
    box-shadow: 1px 2px 1px ${colors.lightGray};
    width: fit-content;
    cursor: pointer;
  }
  button i {
    margin-right: 5px;
  }
`

const PopupStyle = styled(Popup)`
  border-radius: 20px;
  padding: 20px;
`

const AroniaModal = styled.div`
  .arn-content img {
    width: 100%;
    height: 200px;
  }
  .arn-content h2 {
    text-align: center;
  }
  .arn-content p {
    text-align: center;
    font-weight: 400;
  }
  .arn-actions {
    width: 100%;
  }
  .arn-actions button {
    width: 100%;
    text-align: center;
    display: block;
    border: none;
    outline: none;
    background: transparent;
    font-weight: 600;
    font-family: 'Fira Sans';
    padding: 20px;
    border-radius: 30px;
    cursor: pointer;
    color: ${colors.primaryColor};
  }

  .arn-actions .arn-access {
    background: ${colors.primaryColor};
    color: #ffffff;
    width: 90%;
    padding: 15px;
    margin: auto;
    box-shadow: 1px 2px 1px ${colors.lightGray};
  }
`
const openUserMedia = async (e) => {
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((stream) => {
      document.querySelector('#localVideo').srcObject = stream
      return true
    })
    .catch((error) => {
      // Access denied or an error occurred
      console.error(
        "Erreur lors de l'accès  à la caméra et au microphone: ",
        error,
      )

      if (
        error.name === 'NotAllowedError' ||
        error.name === 'PermissionDeniedError'
      ) {
        // The user denied access, handle accordingly
        alert("Vous avez refusé l'accès à la caméra et au microphone.")
      } else if (
        error.name === 'NotFoundError' ||
        error.name === 'DevicesNotFoundError'
      ) {
        // No microphone or camera found, handle accordingly
        alert('Aucun microphone ou caméra trouvé sur cet appareil')
      } else {
        // Handle other errors
        alert("Erreur d'accès aux périphériques: " + error.message)
      }
      return false
    })
}

function Wait() {
  // eslint-disable-next-line no-unused-vars
  const [flag, setFlag] = useState(true)
  const [_granted, setGranted] = useState(false)

  useEffect(() => {
    const source = document.querySelector('.source')
    flag === true && source.click()
  }, [flag])

  const _authorize = () => {
    const tmp = openUserMedia()
    if (tmp === true) {
      setGranted(true)
    } else {
      setGranted(false)
    }
  }

  const _decline = () => {
    alert('declining...')
  }

  return (
    <React.Fragment>
      {!_granted && (
        <PopupStyle
          trigger={
            <input
              className="source"
              type="hidden"
              value="We are going to open pop-up for request access
        to mic & camera"
            />
          }
          modal
          nested
        >
          {(close) => (
            <AroniaModal className="arn-modal">
              <div className="arn-content">
                <img src={request} alt="svg used for illustrate" />
                <br />
                <br />
                <h2>
                  Souhaitez-vous que les autres puissent vous voir et vous
                  entendre pendant la réunion ?
                </h2>
                <br />
                <br />
                <p>
                  Vous pouvez éteindre votre micro et votre caméra à tout
                  moment.
                </p>
                <br />
              </div>
              <div className="arn-actions">
                <button onClick={_authorize} className="arn-access">
                  Autoriser l'accès au micro et à la caméra
                </button>
                <button onClick={_decline}>
                  Continuer sans micro ni caméra
                </button>
              </div>
            </AroniaModal>
          )}
        </PopupStyle>
      )}

      <Header />
      <WaitingRoom>
        <div className="col-1">
          {_granted ? (
            <video id="localVideo" autoPlay playsInline></video>
          ) : (
            <div></div>
          )}
          <div className="controls">
            {_granted === true ? (
              <React.Fragment>
                <VideoControl className="bi bi-mic"></VideoControl>
                <VideoControl className="bi bi-camera-video"></VideoControl>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <VideoControl className="bi bi-mic-mute"></VideoControl>
                <VideoControl className="bi bi-camera-video-off"></VideoControl>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="col-2">
          <h2>Prêt pour la réunion</h2>
          <h3>meet.sirius.com/hkju-mosi-akdi</h3>
          <br />
          <br />
          <JoinControl>
            <button>
              <i className="bi bi-people"></i>
              Participer
            </button>
            <button>
              <i className="bi bi-arrow-up"></i>
              Présenter
            </button>
          </JoinControl>
        </div>
      </WaitingRoom>
    </React.Fragment>
  )
}

export default Wait
