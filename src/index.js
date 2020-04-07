import React from 'react';

import Layout from './components/layout/layout';
import Header from './components/header/header';
import EventsOverview from './components/events-overview/events-overview';

const App = () => {
  return (
    <Layout>
      <Header />
      <EventsOverview />
    </Layout>
  );
};

export default App;
