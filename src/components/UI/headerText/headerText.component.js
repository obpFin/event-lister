import React from 'react';
import { StyleSheet, Text } from 'react-native';

import styles from './headerText.styles';

const HeaderText = ({ children }) => (
  <Text style={styles.header}>{children}</Text>
);

export default HeaderText;
