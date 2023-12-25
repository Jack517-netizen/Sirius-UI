import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { months, days } from './../../data/date'
import Report from './../Report'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from './../../assets/sirius.png'

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`

const LogoStyle = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.4em;
  display: flex;
  width: 8rem;
  justify-content: space-between;
  h2#sr-logo {
    color: ${colors.primaryColor};
  }
`

const ActionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: max-content;
`
const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  i {
    color: ${colors.darkGray};
    font-weight: 600;
    font-size: 1.5em;
    margin-left: 35px;
  }
  i:hover {
    color: ${colors.primaryColor};
  }
`

const AccountStyle = styled.nav`
  margin-left: 30px;
  i {
    color: ${colors.darkGray};
    font-weight: 600;
    font-size: 1.5em;
    margin-left: 35px;
  }
  i:hover {
    color: ${colors.primaryColor};
  }
`

const LinkAuth = styled(Link)`
  color: ${colors.darkGray};
  font-weight: 600;
  margin-left: 35px;
  &:hover {
    color: ${colors.primaryColor};
  }
  text-decoration: none;
`

function Header() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime)
  const [reportVisible, setReportVisible] = useState(false)

  // Date & time manipulation
  function getCurrentTime() {
    const date = new Date()
    const month = months[date.getMonth()]
    const dayName = days[date.getDay()]
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()

    const hours = hour < 10 ? '0' + hour : hour
    const minutes = minute < 10 ? '0' + minute : minute

    return `${hours}:${minutes} - ${dayName}. ${day} ${month}.`
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  //Display or wipe the report section
  const handleReportClick = () => {
    setReportVisible(!reportVisible)
  }

  // check if user is authenticated
  const isAuthenticated = false

  return (
    <HeaderStyle
      onClick={() => {
        if (reportVisible) {
          setReportVisible(false)
        }
      }}
    >
      {/* Logo section */}
      <div>
        <i className="bi bi-start-fill"></i>
        <LogoStyle to="/">
          <img src={logo} alt="sirius-logo" style={{ width: '2rem' }} />
          <h2 id="sr-logo">Sirius.</h2>
        </LogoStyle>
      </div>

      {/* Navbar & actions section */}
      <ActionStyle>
        <NavStyle>
          <span>{currentTime}</span>
          <Link to="/faq">
            <i className="bi bi-question-circle"></i>
          </Link>
          <Link onClick={handleReportClick}>
            <i className="bi bi-chat-left-dots"></i>
          </Link>
          <Link to="/settings">
            <i className="bi bi-gear"></i>
          </Link>
        </NavStyle>

        <AccountStyle>
          {isAuthenticated ? (
            <div>
              <Link to="/account">
                <i className="bi bi-gem"></i>
              </Link>
              <Link to="/account">
                <i className="bi bi-person-circle"></i>
              </Link>
            </div>
          ) : (
            <div>
              <LinkAuth to="/sign-up">
                <span>S'inscrire</span>
              </LinkAuth>
              <LinkAuth to="/login">
                <span>Se connecter</span>
              </LinkAuth>
            </div>
          )}
        </AccountStyle>
      </ActionStyle>

      {/* Display of the report section */}
      {reportVisible && (
        <Report
          close={() => {
            setReportVisible(false)
          }}
        />
      )}
    </HeaderStyle>
  )
}

export default Header
