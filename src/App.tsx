import { useState, useReducer } from 'react';

import Header from './components/ListHeader';

import { 
  Container,
  ListContainer,
  ContainerList,
  ListItems,
  ButtonCheck,
  ListText,
  ButtonRemove,
  InputContainer,
  ButtonEnter,
  InputTask
} from './App';

import { CornerRightUpIcon } from 'lucide-react';

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
        <Header />

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
