import { useState, useReducer } from 'react';
import styled from 'styled-components';

import { CornerRightUpIcon } from 'lucide-react';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248));
`

const ListContainer = styled.div`
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

const ContainerList = styled.div`
  width: 100%;
`

const ListItems = styled.article`
    display: flex;
    width: 100%;
    padding: 20px;
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

const ListText = styled.p`
  flex: 1;
  padding: 0 16px;
  font-size: 18px;
  letter-spacing: 2px;
  color: #3f3f46;
`

const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  opacity: 0;
  transition: all .3s;
  border-radius: 50%;
  background-color: #FFF;
  color: #ef4444;
  
  &:hover {
    background-color: #f4f4f5;
  }

  ${ListItems}:hover & {
    opacity: 1;
  }
`

const InputContainer = styled.div`
  display: flex;
`

const ButtonEnter = styled.button`
  position: relative;
  top: 8px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const InputTask = styled.input`
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

const reducer = (state: any, action: any) => {
  switch(action.type) {
    case 'add-task':
      return {
        tasks: [
          ...state.tasks,
          {
            name: action.payload,
          }
        ]
      }

    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });

  const [inputValue, setInputValue] = useState('');


  return (
    <Container>
      <ListContainer>
        <ListHeader>
          To Do List
        </ListHeader>

        <ContainerList>
          {
            state.tasks.map((task: any) => {
              return (
                <ListItems key={task.name}>
                  <ButtonCheck />
                  
                  <ListText>
                    {task.name}
                  </ListText>

                  <ButtonRemove />
                </ListItems>
              )
            })
          }
        </ContainerList>

        <InputContainer>
          <InputTask 
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
            placeholder='Digite uma tarefa'
          />

          <ButtonEnter
            onClick={() => {
              dispatch({ type: 'add-task', payload: inputValue });
              setInputValue('');
            }}
          >
            <CornerRightUpIcon />
          </ButtonEnter>
        </InputContainer>
      </ListContainer>
    </Container>
  )
}

export default App
