import { Slider } from "react-native-elements";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled14 = () => {
  const universitiesapi_response_get_Search = useSelector(state => state.universitiesapi_response_get_Search);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.ejUrxkoC} value={universitiesapi_response_get_Search.name}></TextInput><TextInput style={styles.ARonLEvQ} value="Hello"></TextInput><Slider style={styles.bkPUtYlQ} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#5bcca4" maximumValue={10} minimumValue={0} step={1} value="0"></Slider></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ejUrxkoC: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  ARonLEvQ: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  bkPUtYlQ: {
    width: 150,
    height: 40
  }
});
export default Untitled14;