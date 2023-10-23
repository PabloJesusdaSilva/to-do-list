import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248));
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
  border-radius: 10px;  
  overflow: hidden;
  background-color: #FFF;
`

export const ContainerList = styled.div`
  width: 100%;
`

export const ListItems = styled.article`
    display: flex;
    width: 100%;
    padding: 20px;
    background: #d4d4d8;
`

export const ButtonCheck = styled.button`
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

export const ListText = styled.p`
  flex: 1;
  padding: 0 16px;
  font-size: 18px;
  letter-spacing: 2px;
  color: #3f3f46;
`

export const ButtonRemove = styled.button`
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

export const InputContainer = styled.div`
  display: flex;
`

export const ButtonEnter = styled.button`
  position: relative;
  top: 8px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const InputTask = styled.input`
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