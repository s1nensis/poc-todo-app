import styled from 'styled-components/native';

export const TodoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #000;
  border-radius: 5px;
  margin: 5px;
  padding: 0 10px;
  border: 1px solid #fff;
`;

export const TodoText = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 14px;
  margin: 5px;
`;
