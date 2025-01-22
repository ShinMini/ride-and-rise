import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import ShadowView from '__test__/InnerShadowView';
import LinearShadowView from '__test__/LinearInnerShadowView';

import Slider from '@react-native-community/slider';
import {useState} from 'react';

export default function App() {
  const [borderRadius, setBorderRadius] = useState(20);
  const [shadowRadius, setShadowRadius] = useState(10);
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(2);
  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(2);

  return (
    <View style={styles.container}>
      <ShadowView
        inset
        shadowSpace={9}
        shadowOffset={{width: shadowOffsetWidth, height: shadowOffsetHeight}}
        style={styles.shadowView}>
        <View
          style={{
            backgroundColor: 'lightgreen',
            width: '100%',
            height: '100%',
          }}>
          <Text style={styles.context}>Inner Shadow</Text>
        </View>
      </ShadowView>

      <LinearShadowView
        shadowOffset={{width: shadowOffsetWidth, height: shadowOffsetHeight}}
        style={styles.shadowView}
        isReflectedLightEnabled
        shadowSpace={9}
        colors={['#d3d0c9', '#393939']}
        from="top"
        to="right">
        <Text style={styles.context}>With Linear</Text>
      </LinearShadowView>

      <View style={styles.blockValue}>
        <Text style={styles.blockValueText}>Shadow radius:</Text>
        <Text style={styles.blockValueText2}>{Math.round(shadowRadius)}</Text>
      </View>
      <Slider
        minimumTrackTintColor="black"
        maximumValue={50}
        minimumValue={0}
        style={{width: '80%'}}
        onValueChange={val => setShadowRadius(val)}
        value={10}
      />

      <View style={styles.blockValue}>
        <Text style={styles.blockValueText}>Shadow Offset Width & Height:</Text>
        <Text style={styles.blockValueText2}>
          {Math.round(shadowOffsetWidth)} & {Math.round(shadowOffsetHeight)}
        </Text>
      </View>

      <Slider
        minimumTrackTintColor="black"
        maximumValue={20}
        minimumValue={0}
        style={{width: '80%'}}
        onValueChange={val => setShadowOffsetWidth(val)}
        value={2}
      />
      <Slider
        minimumTrackTintColor="black"
        maximumValue={20}
        minimumValue={0}
        style={{width: '80%'}}
        onValueChange={val => setShadowOffsetHeight(val)}
        value={2}
      />
      {/* setShadowOffsetWidth */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#F3E9DC',
  },
  shadowView: {
    backgroundColor: '#faffd1e7',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '20%',
    borderRadius: 14,
    padding: 30,
  },
  context: {
    fontSize: 24,
  },
  main: {
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textShadow: {
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  blockValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blockValueText: {
    fontSize: 14,
  },
  blockValueText2: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'left',
  },
});
