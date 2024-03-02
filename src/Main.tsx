import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useSetting } from 'contexts/SettingProvider';
import scales from 'utils/scales';
import Colors, { ThemeColor } from 'themes/colors';

export default function App() {
  const { t, theme } = useSetting();
  const styles = myStyles(theme)

  return (
    <View style={styles.container}>
      <Text style={styles.context}>
        {t('tabBar.home')}
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