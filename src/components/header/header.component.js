import React from 'react';

import { View } from 'react-native';
import HeaderText from '../UI/headerText/headerText.component';

import styles from './layout.styles';

const Header = () => (
  <View style={styles.container}>
    <HeaderText>Events Lister</HeaderText>
  </View>
);

export default Header;
