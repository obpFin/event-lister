import React from 'react';

import Layout from './components/layout/layout.component';
import Header from './components/header/header.component';
import EventsList from './components/eventsList/eventsList.container';

const App = () => {
  return (
    <Layout>
      <Header />
      <EventsList />
    </Layout>
  );
};

export default App;
