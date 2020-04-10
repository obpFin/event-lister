import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native';

import styles from './event.styles';

const Event = ({ name, host, date, start_time }) => {
  const [expanded, setExpanded] = useState(false);
  const descHeight = new Animated.Value(0);

  const toggleExpanded = () => {
    Animated.timing(descHeight, {
      toValue: expanded ? 0 : 200,
      duration: 200,
      useNativeDriver: false,
    }).start(() => setExpanded(!expanded));
  };
  return (
    <TouchableWithoutFeedback onPress={toggleExpanded}>
      <View>
        <View style={styles.container}>
          <Text style={styles.titleText}>{name}</Text>
          <Animated.View style={{ height: descHeight }}>
            <Text style={styles.descText}>{host}</Text>
            <Text style={styles.descText}>{date}</Text>
            <Text style={styles.descText}>{start_time}</Text>
          </Animated.View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Event;
