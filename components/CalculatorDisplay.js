import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const CalculatorDisplay = ({result}) => {
  return (
    <View style={styles.container}>
      <View style={styles.resultWrap}>
        <Text style={styles.result}>
          {result}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "black",

  },
  resultWrap:{
    flex:1,
    flexDirection:"column-reverse",
    width: "100%"

  },
  result:{
    color: "white",
    fontSize: 50,
    textAlign: "right"

  }
});
export default CalculatorDisplay;