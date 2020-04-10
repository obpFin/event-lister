import React from 'react';
import { View } from 'react-native';

import styles from './layout.styles';

const Layout = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export default Layout;
