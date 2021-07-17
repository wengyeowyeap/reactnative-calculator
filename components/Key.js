import React from "react";
import { StyleSheet, View,} from 'react-native';
import {Button, Text } from 'native-base';

const Key = ({ data, performCalculation }) => {
  const onKeyPress=() => {
    performCalculation(data.value)
  }
  return (
    <>
      <View style={{...styles.container, ...{backgroundColor:data.color}}}  >
        <Button onPress={onKeyPress} style={{...styles.buttons, ...{backgroundColor: data.color}}  }>
          <Text style={styles.text}>{data.value}</Text>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "25%",
    
  },
  buttons:{
    height:"34.2%",
    justifyContent:"center",

  },
  text:{
    fontSize:40,

  }
});

export default Key;