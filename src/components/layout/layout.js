import React from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';

const Layout = ({ children }) => (
  <ScrollView style={styles.container}>{children}</ScrollView>
);

export default Layout;
