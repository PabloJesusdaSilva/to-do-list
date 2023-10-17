import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248));
`

const ListsItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
  border-radius: 10px;  
  overflow: hidden;
  background-color: #FFF;
`

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

const ContainerList = styled.ul`
  width: 100%;
`

const ListItems = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 30px;
    background: #d4d4d8;
`

const ButtonCheck = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  transition: all .3s;
  border-radius: 50%;
  background-color: #fafafa;

  &:hover {
    background-color: #f4f4f5;
  }
` 

const DoneButtonCheck = styled.button`
  width: 14px;
  height: 14px;
  opacity: 0;
  border-radius: 50%;
  transition: all .3s;
  background: #4ade80;

  ${ButtonCheck}:hover & {
    opacity: 1;
  }
`

const ListText = styled.span`
  flex: 1;
  padding: 0 16px;
  font-size: 18px;
  letter-spacing: 2px;
  color: #3f3f46;
`

const RemoveItem = styled.button`
  width: 20px;
  height: 20px;
  opacity: 0;
  transition: all .3s;
  border-radius: 50%;
  background-color: #FFF;
  
  &:hover {
    background-color: #f4f4f5;
  }

  ${ListItems}:hover & {
    opacity: 1;
  }
`

const ListInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 28px 20px;
  border: none;
  background-color: #f4f4f5;

  &::placeholder {
    padding-left: 18px;
    font-weight: 500;
    letter-spacing: 2px;
    color: #27272a;
  }
`

const App = () => {
  const [isButtonCheck, setIsButtonCheck] = useState(false)

  const ButtonItemCheck = document.querySelectorAll('.button-check');

  const handleButtonCheck = () => {
    ButtonItemCheck.forEach((e: any) => {
      addEventListener('click', (e) => {
        setIsButtonCheck(!isButtonCheck);
      })
    });
  }

  return (
    <Container>
      <ListsItems>
        <ListHeader>
          To Do List
        </ListHeader>

        <ContainerList>
          <ListItems className="button-check">
            <ButtonCheck onClick={handleButtonCheck}>
              {
                isButtonCheck
                  ? <DoneButtonCheck />
                  : ' '
              }
            </ButtonCheck>

            <ListText>
              First Text
            </ListText>

            <RemoveItem />
          </ListItems>
        </ContainerList>

        <ListInput
          type="text"
          placeholder='Digite uma tarefa'
        />
      </ListsItems>
    </Container>
  )
}

export default App
