import styled from 'styled-components'
import colors from '../../utils/style/colors'
import feedback from './../../assets/feedback.png'
import DropdownItem from './../DropdownItem'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const Container = styled.div`
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }

  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }

  .menu-primary-exit {
    position: absolute;
  }

  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 500ms ease;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }

  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }

  .menu-secondary-exit {
  }

  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all 500ms ease;
  }
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid ${colors.lightGray};
  background-color: #fff;
  border-radius: 2px;
  width: 30rem;
  height: 100%;
  z-index: 10;
  overflow: hidden;

  img {
    height: 12rem;
    width: 15rem;
    margin-left: 8rem;
  }
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colors.lightGray};
`

function Report({ close }) {
  const [activeMenu, setActiveMenu] = useState('main')

  return (
    <DropdownMenu>
      <i className="bi bi-x-lg" onClick={close} style={{ marginTop: 100 }}></i>
      <Title>Nous envoyer des commentaires</Title>
      <img src={feedback} alt="comment_image" />

      <Container>
        <CSSTransition
          in={activeMenu === 'main'}
          unmountOnExit
          timeout={500}
          classNames="menu-primary"
        >
          <div>
            <DropdownItem
              leftIcon={<i className="bi bi-flag-fill"></i>}
              goToMenu="signal"
              setActiveMenu={setActiveMenu}
            >
              Signaler un problème
            </DropdownItem>
            <DropdownItem
              leftIcon={<i className="bi bi-lightbulb-fill"></i>}
              goToMenu="suggest"
              setActiveMenu={setActiveMenu}
            >
              Suggérer une idée
            </DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'signal'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
        >
          <div>
            <DropdownItem
              leftIcon={<i className="bi bi-arrow-left"></i>}
              goToMenu="main"
              setActiveMenu={setActiveMenu}
            >
              <h2>Nous signaler un problème</h2>
            </DropdownItem>

            <form action="" method="post">
              <label htmlFor="signal-msg">
                Veuillez nous décrire votre problème
              </label>
              <textarea
                name="signal-msg"
                id="signal-msg"
                cols="30"
                rows="10"
                placeholder="Message..."
              ></textarea>
              <input type="submit" value="envoyer" />
            </form>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'suggest'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
        >
          <div>
            <DropdownItem
              leftIcon={<i className="bi bi-arrow-left"></i>}
              goToMenu="main"
              setActiveMenu={setActiveMenu}
            >
              <h2>Nous suggerer une idée</h2>
            </DropdownItem>

            <form action="" method="post">
              <label htmlFor="suggest-msg">
                Veuillez nous décrire votre idée
              </label>
              <textarea
                name="suggest-msg"
                id="suggest-msg"
                cols="30"
                rows="10"
                placeholder="Message..."
              ></textarea>
              <input type="submit" value="envoyer" />
            </form>
          </div>
        </CSSTransition>
      </Container>
    </DropdownMenu>
  )
}

export default Report
