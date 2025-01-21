import * as React from 'react';
import { Text, View, StyleSheet, Pressable, } from 'react-native';
import scales from 'utils/scales';
import ShadowView from '__test__/InnerShadowView';
import LinearShadowView from '__test__/LinearInnerShadowView';

export default function App() {

  return (
    <View style={styles.container}>
      <ShadowView style={styles.shadowView}>
          <Text style={styles.context}>Hello, World!</Text>
      </ShadowView>
      <LinearShadowView inset style={styles.shadowView} colors={['#fff9e8', '#393939']}
      from='top' to='right'
      >
          <Text style={styles.context}>Hello, World!</Text>
      </LinearShadowView>
    </View>

  );
}
const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    shadowView: {
      backgroundColor: '#7e1b1b87',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      height: '40%',
      borderRadius: 10,
    },
    context: {
      fontSize: scales(32),
    }
  })