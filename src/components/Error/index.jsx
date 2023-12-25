import styled from 'styled-components'
import error404 from './../../assets/error404.png'
import colors from './../../utils/style/colors'
import { Link } from 'react-router-dom'

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const ImgCard = styled.div`
  width: 60%;
  height: 100%;
  img {
    width: 100%;
    height: 550px;
  }
`

const DetailsCard = styled.div`
  width: 40%;
  strong,
  #actions a:first-child {
    padding: 9px;
    background-color: ${colors.primaryColor};
    border-radius: 15px;
    color: ${colors.backgroundWhite};
    text-decoration: none;
  }
  h1,
  p#desc {
    margin: 20px auto;
    font-weight: 500;
  }
  p#actions {
    display: flex;
    align-items: center;
  }
  #actions a:last-child {
    color: ${colors.primaryColor};
    text-decoration: none;
    margin-left: 15px;
  }
  #social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 150px;
  }
  #social i {
    margin-left: 20px;
    color: ${colors.primaryColor};
    font-size: 1.3em;
  }
`

function Error() {
  return (
    <ContainerStyle>
      <ImgCard>
        <img src={error404} alt="Illustation pour la page d'erreur 404" />
      </ImgCard>
      <DetailsCard>
        <strong>Page non trouvé</strong>
        <h1>Oh non ! Erreur 404</h1>
        <p id="desc">
          Une erreur est survenue au cours de la navigation.
          <br />
          Vous pouvez revenir à la page d'acccueil ou visiter notre crentre
          d'aide
        </p>
        <p id="actions">
          <a href="/">Revenir à la page d'acccueil</a>
          <a href="/faq">Visiter notre centre d'aide</a>
        </p>
        <p id="social">
          <span>Suivez-nous sur nos réseaux sociaux</span>
          <span>
            <Link to="#">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="#">
              <i className="bi bi-youtube"></i>
            </Link>
            <Link to="#">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="#">
              <i className="bi bi-twitter"></i>
            </Link>
          </span>
          &nbsp;&nbsp;
        </p>
      </DetailsCard>
    </ContainerStyle>
  )
}

export default Error
