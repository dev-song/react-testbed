import React, { useState } from 'react';
import styled from 'styled-components';
import { fadeIn } from './assets/styles/animations';

const Wrapper = styled.div`
  display: flex;
  display: none; // 테스트 시 현재 라인 주석 처리
  justify-content: center;
  align-items: center;
  height: 600px;
  cursor: pointer;

  /* border: 1px solid black; */
  font: 72px bold;
  color: purple;

  animation: ${fadeIn} 2s ease-in-out forwards;
`;

type TestComponentProps = {};

const TestComponent: React.FC<TestComponentProps> = () => {
  const [textIndex, setTextIndex] = useState(0);

  return (
    <Wrapper
      onClick={() => setTextIndex((index) => (textIndex < messages.length - 1 ? index + 1 : 0))}
    >
      {messages[textIndex]}
    </Wrapper>
  );
};

export default TestComponent;

const messages = ['안녕하세요', '메롱'];
