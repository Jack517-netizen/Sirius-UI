import React from 'react'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Container = styled.div`
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
`
const ColomnContainer = styled.div`
  display: flex;
  justity-content: space-between;
  width: 100%;
  cursor: pointer;

  &hover {
    background-color: ${colors.lightGray};
    width: 100%;
  }
`

const ButtonStyle = styled.button`
  background-color: transparent;
  color: ${colors.primaryColor};
  border: none;
  cursor: pointer;
  padding: 0 1px;
  width: 2px;
  margin-left: 60rem;
`
const TextContainer = styled.div`
  text-align: center;
  max-height: 600px;
  opacity: 1;
`

const Line = styled.div`
  width: 80%;
  height: 0.1rem;
  margin: 20px auto;
  margin-left: 0;
  background: ${colors.disabledColor};
`

export const Accordion = ({ section, key }) => {
  function OpenController(initialState) {
    let state
    const [isOpen, setIsOpen] = useState(state)
    const toggle = useCallback(() => {
      setIsOpen((state) => !state)
    }, [setIsOpen])

    return { isOpen, toggle }
  }

  const { isOpen, toggle } = OpenController(false)

  return (
    <Container>
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
        style={{ marginRight: 20 }}
      />
      {isOpen && <TextSection text={section.answer} />}
      <Line />
    </Container>
  )
}

export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <ColomnContainer onClick={toggle}>
      <TextContainer>{question}</TextContainer>
      <ButtonStyle>
        <i
          className="bi bi-caret-down-fill"
          style={{
            transform: `rotate(${isOpen ? 0 : 0}deg)`,
            transition: 'all 0.25s',
          }}
        ></i>
      </ButtonStyle>
    </ColomnContainer>
  )
}

export const TextSection = ({ text }) => {
  return (
    <ColomnContainer>
      <div style={{ opacity: 0.5, fontSize: 15 }}>{text}</div>
    </ColomnContainer>
  )
}
