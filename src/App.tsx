import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import Header from './components/Header';
import MoreInfo from './components/MoreInfo';
import NotFound from './components/NotFound';
import Search from './components/Search';
import TextArea from './components/TextArea';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<TextArea />} />
        <Route path="/e/:id" element={<MoreInfo />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
