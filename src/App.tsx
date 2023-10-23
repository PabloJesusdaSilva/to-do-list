import { useState, useReducer } from 'react';

import Header from './components/ListHeader';

import { 
  Container,
  ListContainer,
  ListTasks,
  ListItems,
  CheckButton,
  ListText,
  DeleteButton,
  InputContainer,
  ConfirmButton,
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

        <ListTasks>
          {
            state.tasks.map((task: any) => {
              return (
                <ListItems key={task.name}>
                  <CheckButton />

                  <ListText>
                    {task.name}
                  </ListText>

                  <DeleteButton />
                </ListItems>
              )
            })
          }
        </ListTasks>

        <InputContainer>
          <InputTask 
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
            placeholder='Digite uma tarefa'
          />

          <ConfirmButton
            onClick={() => {
              dispatch({ type: 'add-task', payload: inputValue });
              setInputValue('');
            }}
          >
            <CornerRightUpIcon />
          </ConfirmButton>
        </InputContainer>
      </ListContainer>
    </Container>
  )
}

export default App
