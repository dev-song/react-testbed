import React from 'react';
import TestComponent from './TestComponent';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <TestComponent />
      Componet base
    </div>
  );
};
export default App;
