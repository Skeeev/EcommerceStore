import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

import { withMemo } from 'src/HOCs';
import styles from './Preview.styles';

export const Preview = withMemo(({ title, imageUri, style, onPress }) => {
  const imageSource = { uri: imageUri };

  return (
    <TouchableOpacity style={StyleSheet.flatten([styles.container, style])} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
});

Preview.displayName = 'Preview';
