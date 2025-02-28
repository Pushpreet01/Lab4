// app/lab5.tsx
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CallAPI from '../components/callAPI';

const Lab5 = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Submit" onPress={() => setShowComponent(!showComponent)} />
      {showComponent && <CallAPI />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lab5;
