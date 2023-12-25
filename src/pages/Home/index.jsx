import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { svgItems } from './../../data/svgItems'
import React, { useEffect, useState } from 'react'
import colors from './../../utils/style/colors'
import Header from './../../components/Header'

const ContainerStyle = styled.div`
  margin: 15px 10px 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const InfoStyle = styled.div`
  width: 41%;
  img#sr-svg {
    width: 370px;
    height: 370px;
    border-radius: 50%;
    border: 1px solid ${colors.darkGray};
  }
  h1 {
    font-size: 2.9em;
    margin-bottom: 20px;
    font-weight: 400;
  }
  p {
    margin-bottom: 50px;
  }
`
const ActionStyle = styled.div`
  display: flex;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${colors.lightGray};
  justify-content: space-between;
  span#sr-new-meet {
    background-color: ${colors.primaryColor};
    color: ${colors.backgroundWhite};
    font-weight: 500;
    font-size: 1.1em;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
  }
  span#sr-go-meet {
    display: flex;
    align-items: center;
  }
  span#sr-go-meet button {
    background-color: #fff;
    color: ${colors.disabledColor};
    outline: none;
    border: none;
    font-family: 'Fira Sans';
    font-size: 1em;
    cursor: pointer;
  }
  span#sr-go-meet div {
    border: 1px solid ${colors.darkGray};
    border-radius: 2px;
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
  span#sr-go-meet div:focus-within {
    border: 1px solid ${colors.primaryColor};
  }
  span#sr-go-meet div svg {
    color: ${colors.darkGray};
    margin: 5px;
    font-size: 20px;
  }
  span#sr-go-meet div input {
    padding: 10px;
    border: none;
    outline: none;
    font-family: 'Fira Sans';
  }
`

const CardStyle = styled.div`
  width: 40%;
  img#sr-svg {
    width: 370px;
    height: 370px;
    border-radius: 50%;
    border: 1px solid ${colors.darkGray};
  }
`
const BoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  i.bi-chevron-right{
    cursor: pointer;
    color: color: ${(props) => props.color};
  }

  i.bi-chevron-left{
    cursor: pointer;
    color: ${(props) => props.color};
  }
`
const BoxDescStyle = styled.div`
  text-align: center;
  h2 {
    margin: 15px 0px;
    font-weight: 500;
  }
  p {
    margin-bottom: 7px;
  }
  i#sr-thr {
    font-weight: 600;
    font-size: 35px;
  }
`

const CarousselStyle = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button.active {
    background-color: ${colors.primaryColor};
    border-color: ${colors.primaryColor};
  }

  button {
    cursor: pointer;
    margin: 0 4px;
    width: 6px;
    height: 6px;
    border: 1px solid ${colors.darkGray};
    border-radius: 50%;
    background-color: ${colors.disabledColor};
    display: inline-block;
  }
`

function Home() {
  const [index, setIndex] = useState(0)
  const [leftChevronColor, setLeftChevronColor] = useState(colors.primaryColor)
  const [rightChevronColor, setRightChevronColor] = useState(
    colors.primaryColor,
  )

  useEffect(() => {
    setLeftChevronColor(index === 0 ? colors.darkGray : colors.primaryColor)
    setRightChevronColor(
      index === svgItems.length - 1 ? colors.darkGray : colors.primaryColor,
    )
  }, [index])

  // handle right or left svg click
  function handleClick(e) {
    // Calcul du nouvel index en fonction de la direction
    const newIndex = index + e

    if (newIndex >= 0 && newIndex < svgItems.length) {
      setIndex(newIndex)
    }
  }

  return (
    <React.Fragment>
      <Header />
      <ContainerStyle>
        <InfoStyle>
          <h1>
            La visioconférence haute qualité, maintenant disponible pour tous
          </h1>
          <p>
            Nous avons adapté Sirius, notre service de
            <br /> visioconférence professionnel sécurisé, afin de le rendre
            <br /> disponible pour tous.
          </p>
          <ActionStyle>
            <span id="sr-new-meet">
              <i className="bi bi-node-plus-fill"></i>&nbsp; Nouvelle réunion
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span id="sr-go-meet">
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-keyboard-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm13 .25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25zM2.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 8.75v-.5A.25.25 0 0 0 2.75 8h-.5zM4 8.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 5 8.75v-.5A.25.25 0 0 0 4.75 8h-.5a.25.25 0 0 0-.25.25zM6.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 7 8.75v-.5A.25.25 0 0 0 6.75 8h-.5zM8 8.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 9 8.75v-.5A.25.25 0 0 0 8.75 8h-.5a.25.25 0 0 0-.25.25zM13.25 8a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zm-3-2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-1.5zm.75 2.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25zM11.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5zM9 6.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5A.25.25 0 0 0 9.75 6h-.5a.25.25 0 0 0-.25.25zM7.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 8 6.75v-.5A.25.25 0 0 0 7.75 6h-.5zM5 6.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 6 6.75v-.5A.25.25 0 0 0 5.75 6h-.5a.25.25 0 0 0-.25.25zM2.25 6a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 4 6.75v-.5A.25.25 0 0 0 3.75 6h-1.5zM2 10.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25zM4.25 10a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-5.5z"></path>
                  </svg>
                </span>
                <input type="text" placeholder="Saisir un code ou lien" />
                &nbsp;&nbsp;
              </div>
              <button>Participer</button>
            </span>
          </ActionStyle>

          <p>
            <Link
              to="/about-us"
              style={{
                textDecoration: 'none',
                color: `${colors['primaryColor']}`,
              }}
            >
              En savoir plus sur Sirius
            </Link>
          </p>
        </InfoStyle>

        <CardStyle>
          <BoxStyle>
            <i
              className="bi bi-chevron-left"
              style={{ color: leftChevronColor }}
              onClick={() => handleClick(-1)}
              idx={index}
            ></i>

            <img
              id="sr-svg"
              src={svgItems[index].image}
              alt="Illustration SVG pour la fonctionnalité"
            />

            <i
              className="bi bi-chevron-right"
              style={{ color: rightChevronColor }}
              onClick={() => handleClick(1)}
              idx={index}
            ></i>
          </BoxStyle>

          <BoxDescStyle>
            <h2>{svgItems[index].title}</h2>
            <p>{svgItems[index].description}</p>

            <CarousselStyle>
              <ul>
                {Array(svgItems.length)
                  .fill()
                  .map((_, i) => (
                    <li key={i}>
                      <button
                        className={i === index ? 'active' : ''}
                        onClick={() => setIndex(i)}
                      ></button>
                    </li>
                  ))}
              </ul>
            </CarousselStyle>
          </BoxDescStyle>
        </CardStyle>
      </ContainerStyle>
    </React.Fragment>
  )
}

export default Home
