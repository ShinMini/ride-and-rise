import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import ShadowView from '__test__/InnerShadowView';
import LinearShadowView from '__test__/LinearInnerShadowView';

import Slider from '@react-native-community/slider';
import {useState} from 'react';

export default function App() {
  const [shadowSpace, setShadowSpace] = useState(6);
  const [shadowBlur, setShadowBlur] = useState(3);
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(2);
  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(2);

  const [reflectedLightWidth, setReflectedLightWidth] = useState(-2);
  const [reflectedLightHeight, setReflectedLightHeight] = useState(-2);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <ShadowView
          inset
          shadowSpace={shadowSpace}
          shadowBlur={shadowBlur}
          shadowOffset={{width: shadowOffsetWidth, height: shadowOffsetHeight}}
          reflectedLightOffset={{
            width: reflectedLightWidth,
            height: reflectedLightHeight,
          }}
          style={styles.shadowView}></ShadowView>

        <LinearShadowView
          shadowOffset={{width: shadowOffsetWidth, height: shadowOffsetHeight}}
          reflectedLightOffset={{
            width: reflectedLightWidth,
            height: reflectedLightHeight,
          }}
          style={styles.shadowView}
          shadowBlur={shadowBlur}
          shadowSpace={shadowSpace}
          colors={['#d3d0c9', '#393939']}
          from="top"
          to="right"></LinearShadowView>
      </View>

      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <LinearShadowView
          inset
          shadowOffset={{width: shadowOffsetWidth, height: shadowOffsetHeight}}
          reflectedLightOffset={{
            width: reflectedLightWidth,
            height: reflectedLightHeight,
          }}
          style={styles.shadowView}
          shadowBlur={shadowBlur}
          shadowSpace={shadowSpace}
          colors={['#d3d0c9', '#393939']}
          from="top"
          to="right"></LinearShadowView>

        <ShadowView
          shadowSpace={shadowSpace}
          shadowBlur={shadowBlur}
          shadowOffset={{width: shadowOffsetWidth, height: shadowOffsetHeight}}
          reflectedLightOffset={{
            width: reflectedLightWidth,
            height: reflectedLightHeight,
          }}
          style={styles.shadowView}></ShadowView>
      </View>

      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
        }}>
        <View style={styles.blockValue}>
          <Text style={styles.blockValueText}>Shadow blur:</Text>
          <Text style={styles.blockValueText2}>{shadowBlur.toFixed(1)}</Text>
        </View>
        <Slider
          minimumTrackTintColor="black"
          maximumValue={10}
          minimumValue={0}
          step={0.1}
          style={{width: '80%'}}
          onValueChange={val => setShadowBlur(val)}
          value={3}
        />

        <View style={styles.blockValue}>
          <Text style={styles.blockValueText}>Shadow space:</Text>
          <Text style={styles.blockValueText2}>{Math.round(shadowSpace)}</Text>
        </View>
        <Slider
          minimumTrackTintColor="black"
          maximumValue={30}
          minimumValue={0}
          style={{width: '80%'}}
          onValueChange={val => setShadowSpace(val)}
          value={6}
        />

        <View style={styles.blockValue}>
          <Text style={styles.blockValueText}>
            Shadow Offset Width & Height:
          </Text>
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

        <View style={styles.blockValue}>
          <Text style={styles.blockValueText}>
            reflectedLightWidth Offset Width & Height:
          </Text>
          <Text style={styles.blockValueText2}>
            {Math.round(reflectedLightWidth)} &{' '}
            {Math.round(reflectedLightHeight)}
          </Text>
        </View>

        <Slider
          maximumValue={0}
          minimumValue={-15}
          style={{width: '80%'}}
          onValueChange={val => setReflectedLightWidth(val)}
          value={-2}
        />
        <Slider
          maximumValue={0}
          minimumValue={-15}
          style={{width: '80%'}}
          onValueChange={val => setReflectedLightHeight(val)}
          value={-2}
        />
      </View>
      {/* setShadowOffsetWidth */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#F3E9DC',
  },
  shadowView: {
    backgroundColor: '#faffd1e7',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 2.5,
    aspectRatio: 1,

    borderRadius: 14,
    padding: 10,
  },
  context: {
    fontSize: 24,
  },
  textShadow: {
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  blockValue: {
    flexDirection: 'row',
    gap: 5,
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
