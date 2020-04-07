import React from 'react';

import { View } from 'react-native';
import HeaderText from '../UI/headerText/headerText';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <HeaderText>Events Lister</HeaderText>
  </View>
);

export default Header;
