import styled from 'styled-components';

const ListHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding-left: 30px;
  letter-spacing: 1px;
  font-size: 30px;
  background: #52525b;
  color: #e4e4e7;
`

const Header = () => {
   return(  
      <ListHeader>
          To Do List
      </ListHeader>
   )
}

export default Header;