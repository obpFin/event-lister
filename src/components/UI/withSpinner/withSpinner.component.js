import React from 'react';

import { ActivityIndicator } from 'react-native';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
  isLoading ? <ActivityIndicator /> : <WrappedComponent {...otherProps} />;

export default WithSpinner;
