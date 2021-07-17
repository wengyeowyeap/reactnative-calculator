import React from "react";
import useKeys from "../utils/useKeys"
import Key from "./Key"
import { StyleSheet, Text, View } from 'react-native';

const keys = useKeys()

const KeyPad = ({performCalculation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.keyContainer}>
      {
        keys.map((key) => {
          return <Key data={key} performCalculation={performCalculation}/>
        })
      }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    backgroundColor: "white",
    width: "100%",
  },
  keyContainer:{
    display: "flex", 
    flexDirection: "row", 
    flexWrap: "wrap"
  }

});
export default KeyPad;