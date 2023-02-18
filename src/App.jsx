import moment from 'moment/moment';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Head from './components/Head';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const dataId = useRef(0);
  const today = moment().format('YYYY년 MM월 DD일');

  const inputHandler = e => {
    setInput(e.target.value);
  };

  const todoAddHandler = e => {
    const todo = {
      id: dataId.current,
      content: input,
    };
    dataId.current += 1;
    if (input !== '') {
      setTodoList(prev => [...prev, todo]);
    } else {
      return null;
    }
    setInput('');
  };

  const OnKeyPress = e => {
    if (e.key === 'Enter') {
      todoAddHandler();
    }
  };

  const onDelete = targetId => {
    const newTodoList = todoList.filter(it => it.id !== targetId);
    setTodoList(newTodoList);
  };

  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(todoList.length);
  }, [todoList]);

  console.log(todoList);
  return (
    <Container>
      <Head today={today} count={count} />
      <Line />
      <InputBox>
        <Input
          value={input}
          onChange={inputHandler}
          onKeyPress={OnKeyPress}
          placeholder="오늘 할 일을 적어 주세요."
        />
        <TodoBtn onClick={todoAddHandler}>추가</TodoBtn>
      </InputBox>

      {todoList &&
        todoList.map(item => (
          <List key={item.id}>
            {item.content}
            <button onClick={() => onDelete(item.id)}>삭제</button>
          </List>
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  min-height: 210px;
  height: auto;
  margin: 100px auto;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.01), 0 6px 6px rgba(0, 0, 0, 0.1);
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  margin: 10px auto 20px;
`;

const Input = styled.input`
  width: 450px;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  outline: none;
`;

const TodoBtn = styled.div`
  width: 50px;
  height: 30px;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: #e6e6e6;
  }
`;

const Line = styled.div`
  width: 540px;
  height: 1px;
  background: #e6e6e6;
  margin: 10px auto;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  font-size: 20px;
  margin: 0 auto 20px;
`;

export default App;
