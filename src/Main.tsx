import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useSetting } from 'contexts/SettingProvider';
import scales from 'utils/scales';
import Colors, { ThemeColor } from 'themes/colors';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    Alert.alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    Alert.alert('No values stored under that key.');
  }
}

export default function App() {
  const { t, theme } = useSetting();
  const styles = myStyles(theme)

  return (
    <View style={styles.container}>
      <Text style={styles.context}>
        {t('taBar.home')}
      </Text>
    </View>

  );
}
const myStyles = (theme: ThemeColor) =>
    StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: Colors[theme].backgroundColor
        },
        context: {
          fontSize: scales(16),
          color: Colors[theme].text1
        }
      })