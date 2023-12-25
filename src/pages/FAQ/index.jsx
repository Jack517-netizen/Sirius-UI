import React from 'react'
import Header from '../../components/Header'
import { data } from '../../data/accordionContent'
import { Accordion } from '../../components/Accordion'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Container = styled.div`
  text-align: center;
  width: 100%;
  height: 150px;
  background-color: ${colors.primaryColor};
  background-attachment: fixed;
  background-size: cover;
  margin-bottom: 2rem;
  padding-top: 2rem;

  h1,
  h3 {
    color: #fff;
  }
`
const Title = styled.div`
  text-align: center;
  font-size: 2rem;
`

const Request = styled.div`
  margin-top: 5rem;
  display: flex;

  div {
    float: left;
  }
  div h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  div + input {
    margin-top: 9.8rem;
    margin-left: 1rem;
  }
`

function Faq() {
  return (
    <React.Fragment>
      <Header />
      <div>
        <Container>
          <h1>Comment pouvons nous vous aider ?</h1> <br />
          <h3>Aide et Support aux utilisateurs</h3>
        </Container>

        <Title>Questions fréquemment posées</Title>
        <hr />
        {data.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>

      <Request>
        <form action="post">
          <div>
            <h2>Nous écrire</h2>
            <textarea
              name=""
              id=""
              cols="50"
              rows="8"
              placeholder="Message..."
            ></textarea>
          </div>

          <input type="submit" value="Envoyer" />
        </form>
      </Request>
    </React.Fragment>
  )
}

export default Faq
