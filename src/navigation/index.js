import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './Routes';

/* Wrap all providers here */
const Providers = () => {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
};
export default Providers;
