import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Icon = styled.span`
  color: ${colors.primaryColor};
  margin-right: 1rem;
`
const Item = styled(Link)`
  text-decoration: none;
  color: black;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 1px;
  transition: background 500ms;
  padding: 1rem;
  margin: 0;

  &:hover {
    background-color: ${colors.lightGray};
  }
`

function DropdownItem(props) {
  return (
    <Item
      onClick={() => {
        props.goToMenu && props.setActiveMenu(props.goToMenu)
      }}
    >
      <Icon>{props.leftIcon}</Icon>
      {props.children}
    </Item>
  )
}

export default DropdownItem
