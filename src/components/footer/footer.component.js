import React from 'react';

import { View, Text } from 'react-native';

import styles from './footer.styles';

const Footer = () => (
  <View style={styles.container}>
    <Text style={styles.footerText}>By: Oskari Peltonen</Text>
  </View>
);

export default Footer;
