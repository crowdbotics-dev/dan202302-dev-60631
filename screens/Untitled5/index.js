import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: "column",
      height: "100%",
      padding: 10,
      backgroundColor: "#f0f0f1",
      gap: 10,
      alignItems: "stretch",
      justifyContent: "flex-start"
    }}>
        
          <View style={styles.column1}><View style={styles.XDEynIZH}></View><View style={styles.esxpzOCT}></View><View style={styles.CvYBycDX}></View></View>
          <View style={styles.column2}><View style={styles.NsgykZUX}></View><View style={styles.xsxwRTfn}><Text style={styles.mbByGGUM}>Lorem ipsum…</Text></View><View style={styles.ZVxLCqoc}></View></View>
          
        
        <View style={styles.sZzYJIgt}></View></ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 4,
    gap: 5,
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "#eedf8b"
  },
  column2: {
    flex: 2,
    flexDirection: "row"
  },
  column3: {
    flex: 1
  },
  sZzYJIgt: {
    flex: 1
  },
  XDEynIZH: {
    height: 50,
    width: 50,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  UAKOYQyt: {
    height: 50,
    width: 50,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  ZEakhVqs: {
    height: 50,
    width: 50,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  esxpzOCT: {
    height: 50,
    width: 50,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  CvYBycDX: {
    height: 50,
    width: 50,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  NsgykZUX: {
    flex: 1
  },
  xsxwRTfn: {
    flex: 1
  },
  ZVxLCqoc: {
    flex: 1
  },
  mbByGGUM: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled5;