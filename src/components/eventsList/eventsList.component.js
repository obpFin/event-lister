import React from 'react';
import { View, Text } from 'react-native';

import styles from './eventsList.styles';

const EventsOverview = ({ events }) => {
  console.debug(events);
  return events.rows.map(e => (
    <View key={e.id} style={styles.container}>
      <Text>{e.name}</Text>
      <Text style={styles.hostText}>{e.host}</Text>
    </View>
  ));
};

export default EventsOverview;
