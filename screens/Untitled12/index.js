import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled12 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.EMNYGIey}><ImageBackground style={styles.ejBYrfhj} source={require("./escudo.png")} resizeMode="cover"></ImageBackground></View><View style={styles.cGXCbVce}><View style={styles.HDJuNYsO}><View style={styles.KxNRSAnY}><Text style={styles.FXbDcBhJ}>START</Text></View></View><View style={styles.ySsrCRtj}></View></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  EMNYGIey: {
    flex: 4
  },
  cGXCbVce: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  ejBYrfhj: {
    width: 328,
    height: 375
  },
  rIYhmgPh: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 0,
    left: 99
  },
  HDJuNYsO: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: "1",
    justifyContent: "center",
    alignItems: "center"
  },
  YPoDvFbF: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  ySsrCRtj: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: "1"
  },
  FXbDcBhJ: {
    width: 47,
    height: 24,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  KxNRSAnY: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
export default Untitled12;