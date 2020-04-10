import React from 'react';
import { View } from 'react-native';

import Event from '../event/event.component';

import styles from './eventsList.styles';

const EventsOverview = ({ events }) => (
  <View style={styles.container}>
    {events.rows.map(event => (
      <Event key={event.id} {...event} />
    ))}
  </View>
);

export default EventsOverview;
