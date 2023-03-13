import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import TextArea from './components/TextArea';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <TextArea />
    </div>
  );
};

export default App;
