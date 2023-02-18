import React from 'react';
import styled from 'styled-components';

function Head({ today, count }) {
  return (
    <Container>
      <TodoHead>
        <TodoList>TODOLIST</TodoList>
        <TodayDate>{today}</TodayDate>
      </TodoHead>
      <TodoCount>할 일 {count}개</TodoCount>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto 0;
`;

const TodoHead = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 30px;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

const TodoList = styled.div`
  width: 300px;
  font-size: 30px;
  display: flex;
  font-weight: bold;
  align-items: flex-end;
`;

const TodayDate = styled.div`
  width: 200px;
  font-size: 15px;
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  color: #161a1d;
`;

const TodoCount = styled.div`
  color: #161a1d;
`;
export default Head;
