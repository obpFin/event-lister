import { useState, useEffect } from 'react';
import WithSpinner from '../UI/withSpinner/withSpinner.component';
import Config from 'react-native-config';
import events from './test.json';

import EventsList from './eventsList.component';

const EventsListContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    // const url = Config.API_URL;

    //   fetch(url)
    //     .then(response => {
    //       console.log('jsoni:', JSON.stringify(response, null, 4));
    //       return response.json();
    //     })
    //     .then(json => {
    //       console.debug(json);
    //       // setData(json)
    //     })
    //     .catch(error => console.error(error))
    //     .finally(() => setLoading(false));
    // });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return WithSpinner(EventsList)({ isLoading, events });
};
export default EventsListContainer;
