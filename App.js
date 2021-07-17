import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import CalculatorDisplay from "./components/CalculatorDisplay"
import KeyPad from "./components/KeyPad"
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

function App() {
  const [result, setResult] = useState("")

  const calculate = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };
  
  const reset = () => {
    setResult("");
  };
  
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  
  const performCalculation = key => {
    if (key === "=") {
      calculate();
    } else if (key === "AC") {
      reset();
    } else if (key === "C") {
      backspace();
    } else {
      setResult(result + key);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <CalculatorDisplay result={result}/>
          <KeyPad performCalculation={performCalculation}/>
        </View>
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});

export default App;