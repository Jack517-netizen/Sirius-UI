import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import colors from './../../utils/style/colors'
import facebook from './../../assets/facebook.png'
import google from './../../assets/google.png'
import git from './../../assets/git.png'
// import logo from './../../assets/sirius.png'

const Return = styled(Link)`
  i {
    font-size: 2rem;
    margin-left: 4rem;
    color: ${colors.confirmColor};
  }

  i:hover {
    color: ${colors.primaryColor};
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-top: 4rem;
`
const Inscription = styled.div`
  width: 450px;
  padding: 2rem 2rem;
  border-radius: 1rem;
  height: 550px;
  box-shadow: 0 0 25px ${colors.lightGray};
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    width: 50px;
    height: 40px;
  }

  h1 {
    font-weight: bold;
  }
`
const Form = styled.div`
  position: relative;
  height: 50px;
  margin-bottom: 1.4rem;

  input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border: 1px solid ${colors.disabledColor};
    border-radius: 0.5rem;
    outline: none;
    background: none;
    z-index: 1;
    padding-left: 2rem;
  }
  input::placeholder {
    font-size: 1rem;
    position: absolute;
    left: 2rem;
    color: ${colors.disabledColor};
  }

  label {
    position: absolute;
    left: 1.6rem;
    top: 0.9rem;
    padding: 0 0.25rem;
    width: 50%;
    height: 50%;
    font-size: 0.8rem;
    background-color: ${colors.white};
    color: ${colors.disabledColor};
    transition: 0.25s;
    z-index: 2;
    pointer-events: none;
  }

  label + i {
    position: absolute;
    left: 0.5rem;
    top: 0.8rem;
    color: ${colors.disabledColor};
    z-index: 3;
    font-size: 1rem;
  }

  #passwd1,
  #passwd2 {
    position: absolute;
    right: 5px;
    z-index: 999;
    color: ${colors.confirmColor};
  }

  input:not(:placeholder-shown) + label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.75rem;
    width: fit-content;
    height: fit-content;
    z-index: 10;
    background: #fff;
  }

  input:focus + label {
    top: -0.5rem;
    left: 0.8rem;
    color: ${colors.primaryColor};
    font-size: 0.8rem;
    width: fit-content;
    height: fit-content;
    z-index: 10;
    background: #fff;
  }

  input:not(:placeholder-shown) input:not(:focus) + label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.75rem;
    z-index: 10;
  }

  input:focus {
    border: 1px solid ${colors.primaryColor};
  }

  p {
    position: absolute;
    color: ${colors.primaryColor};
    font-size: 0.8rem;
    top: 3.2rem;
    left: 1rem;
  }
`

const Small = styled.small`
  display: flex;
  margin-top: 1rem;
  font-size: 0.78rem;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`
const Anchor = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.primaryColor};
`
const Button = styled.button`
  display: block;
  padding: 0.72rem 2rem;
  width: 100%;
  outline: 0;
  border: 0;
  background-color: ${colors.primaryColor};
  color: ${colors.lightGray};
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  font-family: 'Fira Sans';
`
const Politics = styled.div`
  input {
    width: 1.2rem;
    cursor: pointer;
  }

  label {
    font-size: 0.8rem;
    cursor: pointer;
  }
`
const SocialConnect = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

const LogoStyle = styled.span`
  img {
    width: 35px;
    height: 35px;
    margin-left: 1.4rem;
  }
`

function Sign() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm()
  const [passwordMatch, setPasswordMatch] = useState(false)

  const checkPassword = (value) => {
    const password = watch('pass')
    if (value === password) {
      setPasswordMatch(true)
    } else {
      setPasswordMatch(false)
    }
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Return>
        <Link to="/">
          <i className="bi bi-arrow-left"></i>
        </Link>
      </Return>
      <Container>
        <Inscription>
          <Title>
            {/* <img src={logo} alt="logo-sirius" /> */}
            <h1>Connexion</h1>
          </Title>

          <form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
            <Form>
              <input
                type="text"
                id="nom"
                {...register('name', { required: true })}
                placeholder=""
              />
              {errors.name && <p>Veuillez renseignez votre nom</p>}
              <label htmlFor="name">Nom d'utilisateur</label>
              <i className="bi bi-person"></i>
            </Form>

            <Form>
              <input
                type="email"
                id="mail"
                placeholder=""
                {...register('email', { required: true })}
              />
              {errors.email && <p>Veuillez renseignez votre adresse mail</p>}
              <label htmlFor="mail">Adresse mail</label>
              <i className="bi bi-envelope"></i>
            </Form>

            <Form>
              {passwordMatch && (
                <i className="bi bi-check2-circle" id="passwd1"></i>
              )}
              <input
                type="password"
                id="pass"
                placeholder=""
                {...register('pass', { required: true })}
                onChange={(e) => {
                  checkPassword(e.target.value)
                }}
              />
              <label htmlFor="pass">Mot de passe</label>
              <i className="bi bi-lock"></i>
            </Form>

            <Form>
              {passwordMatch && (
                <i className="bi bi-check2-circle" id="passwd2"></i>
              )}
              <input
                type="password"
                id="pass2"
                placeholder=""
                {...register('pass2', { required: true })}
                onChange={(e) => {
                  checkPassword(e.target.value)
                }}
              />
              {errors.pass2 && <p>Veuillez confirmer votre mot de passe</p>}
              <label htmlFor="pass2">Confirmation du mot de passe</label>
              <i className="bi bi-lock"></i>
            </Form>

            <Politics>
              <input type="checkbox" name="politique" id="politique" />
              <label htmlFor="politique">
                Accepter les politiques de confidentialités
              </label>
            </Politics>

            <Button>Ouvrir son compte</Button>
          </form>

          <Small>
            <span>
              Déjà inscrit ?
              <Anchor to="/login">&nbsp;&nbsp; Se connecter</Anchor>
            </span>
          </Small>

          <SocialConnect>
            <h5>Ou continuer avec</h5>&nbsp;&nbsp;
            <LogoStyle>
              <Link to="/facebook">
                <img src={facebook} alt="logo-windows" />
              </Link>
            </LogoStyle>
            <LogoStyle>
              <Link to="/google">
                <img src={google} alt="logo-gmail" />
              </Link>
            </LogoStyle>
            <LogoStyle>
              <Link to="/git">
                <img src={git} alt="logo-git" />
              </Link>
            </LogoStyle>
          </SocialConnect>
        </Inscription>
      </Container>
    </>
  )
}

export default Sign
