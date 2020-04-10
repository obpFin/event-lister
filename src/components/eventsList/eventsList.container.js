import { useState, useEffect } from 'react';
import Config from 'react-native-config';

import EventsList from './eventsList.component';
import WithSpinner from '../UI/withSpinner/withSpinner.component';

const EventsListContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const url = Config.API_URL;

    fetch(url)
      .then(res => res.json())
      .then(events => setEvents(events))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return WithSpinner(EventsList)({ isLoading, events });
};
export default EventsListContainer;
