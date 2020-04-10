import React from 'react';

import Layout from './components/layout/layout.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import EventsList from './components/eventsList/eventsList.container';

const App = () => (
  <Layout>
    <Header />
    <EventsList />
    <Footer />
  </Layout>
);

export default App;
